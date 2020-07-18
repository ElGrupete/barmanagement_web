import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  opened: boolean;
  closed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClosedMenu(): void {
    this.closed = true;
    this.opened = false;
  }

  onOpenedMenu(): void {
    this.opened = true;
    this.closed = false;
  }

}
