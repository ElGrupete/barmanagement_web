import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../../shared/constants/menu-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items = MenuItems;

  constructor() { }

  ngOnInit(): void {
  }

}
