import { MatSelectionList } from '@angular/material/list';
import { DialogModel, SelectionDialogModel } from './../../models/selection-dialog.model';
import { Component, Inject, OnInit, ViewChild, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent<T extends DialogModel> implements OnInit {

  selectedItems: T[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: SelectionDialogModel<T>,
              private dialogService: DialogService<T>
              ) { }

  ngOnInit(): void {
  }

  onSelectionChange(change: MatCheckboxChange): void {
    this.getSelectedItems(change.checked, change.source.value);
  }

  getSelectedItems(checked: boolean, value: string): void {
    let selected: T;
    this.data.items.forEach(item => {
      if (item.name === value) {
        selected = item;
      }
    });

    if (checked && !this.selectedItems.includes(selected)) {
      this.selectedItems.push(selected);
      console.log(this.selectedItems);
    } else if (!checked && this.selectedItems.includes(selected)) {
      let i = this.selectedItems.findIndex(x => x == selected);
      this.selectedItems.splice(i, 1);
      console.log(this.selectedItems);
    }
  }

  onAccept(): void {
    this.dialogService.selectedData(this.selectedItems)
  }

  onCancel(): void {
    this.dialogService.close();
  }

}

@Injectable({
  providedIn: 'root'
})
export class DialogService<T> {

  selectedItems$: Subject<T[]> = new Subject();

  constructor(private dialog: MatDialog) { }

  open(data: SelectionDialogModel<T>): void {
    this.dialog.open(DialogComponent, {
      data,
      disableClose: true
    });
  }

  close(): void {
    this.dialog.closeAll();
  }

  selectedData(data: T[]): void {
    this.selectedItems$
        .next(data);
    this.close();
  }
}
