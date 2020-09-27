import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute});
  }
}
