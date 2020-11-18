import { AuthService } from './../../../../../core/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav: MatSidenav;
  @Input() opened: boolean = false;
  @Input() closed: boolean = true;

  canSeeButtons: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.setButtonVisibility();
  }

  private setButtonVisibility(): void {
    if (this.authService.isTableRole()) {
      this.canSeeButtons = true;
    } else {
      this.canSeeButtons = false;
    }
  }

}
