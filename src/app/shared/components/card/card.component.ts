import { Router } from '@angular/router';
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
  @Input() title: string = '';
  @Input() items: ICard[] = [];
  @Input() redirectPath: string = '/';

  /** The AuthService is for allowing or not the actions, depending on the user role */
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onEdit(id: string): void {
    this.router.navigate([this.redirectPath, 'edit', id]);
  }

  onView(id: string): void {
    this.router.navigate([this.redirectPath, 'detail', id]);
  }

}
