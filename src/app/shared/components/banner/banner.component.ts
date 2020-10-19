import { Router } from '@angular/router';
import { Product } from './../../../core/modules/management/menus/product/models/product.model';
import { ICard } from 'src/app/shared/models/card.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() item: ICard;
  @Input() products: Product[] = [];
  @Input() buttonNav: string = '/management'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate([this.buttonNav])
  }

}
