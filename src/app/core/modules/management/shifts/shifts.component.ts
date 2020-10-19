import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {
  
  title: string = 'turnos';
  options: IOptions[] = [
    {name: 'abrir turno', url: ''}, 
    {name: 'cerrar turno', url: ''}, 
    {name: 'informar modificaciones', url: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
