import { AuthService } from './../../../core/services/auth.service';
import { ICard } from './../../models/card.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  canSeeActions: boolean = true;
  @Input() items: ICard[] = [];

  /** The AuthService is for allowing or not the actions, depending on the user role */
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onEdit(id: string): void {
    console.log(id);
  }

  onView(id: string): void {
    console.log(id);
  }

}
