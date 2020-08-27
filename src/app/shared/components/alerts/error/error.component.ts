import { Component, OnInit, Inject } from '@angular/core';
import { AlertMessages } from 'src/app/shared/constants/alert-messages';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  
  status: string = AlertMessages.error.status;
  message: string = this.data != null || 
                    this.data != undefined ? this.data : AlertMessages.error.message;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }


  ngOnInit(): void {
  }

}
