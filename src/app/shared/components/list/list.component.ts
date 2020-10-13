import { IList } from './../../models/list.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Input() buttonNav: string = '';
  @Input() title: string = '';
  @Input() options: IList[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate([this.buttonNav]);
  }
}
