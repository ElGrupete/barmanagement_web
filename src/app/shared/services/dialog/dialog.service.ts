import { Subject } from 'rxjs';
import { DialogComponent } from './../../components/dialog/dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectionDialogModel } from '../../models/selection-dialog.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService<T> {

  selectedItems$: Subject<T> = new Subject();

  constructor(private dialog: MatDialog) { }

  open(data: SelectionDialogModel<T>): void {
    this.dialog.open(DialogComponent, {
      data,
      disableClose: true
    });
  }
}
