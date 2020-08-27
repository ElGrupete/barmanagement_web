import { Component, OnInit, Inject } from '@angular/core';
import { AlertMessages } from '../../../constants/alert-messages';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  status: string = AlertMessages.success.status;
  message: string = this.data != null || 
                    this.data != undefined ? this.data : AlertMessages.success.message;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }

  ngOnInit(): void {
  }

}
