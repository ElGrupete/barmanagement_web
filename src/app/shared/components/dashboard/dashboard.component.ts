import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IOptions } from '../../models/options.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() button: boolean = true;
  @Input() buttonNav: string = '';
  @Input() title: string = '';
  @Input() options: IOptions[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.router.navigate([this.buttonNav]);
  }

}
