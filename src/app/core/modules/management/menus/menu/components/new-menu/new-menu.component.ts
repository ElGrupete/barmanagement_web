import { CategoryService } from './../../../category/services/category.service';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { Menu } from '../../models/menu.model';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { map } from 'rxjs/operators';
import { Category } from '../../../category/models/category.model';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.scss']
})
export class NewMenuComponent implements OnInit {
  
  title: string = 'ingresar nueva categoría';
  form: FormGroup;

  categories: Category[] = [];

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
  get category() { return this.form.get('category'); }
  get notes() { return this.form.get('notes'); }
  get image() { return this.form.get('image'); }
  get status() { return this.form.get('status'); }
  get printed() { return this.form.get('printed'); }
  get product() { return this.form.get('status') as FormArray; }

  constructor(private fb: FormBuilder,
              private router: Router,
              private alertService: AlertService,
              private categoryService: CategoryService,
              private menuService: MenuService) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      category: [''],
      notes: [''],
      image: [''],
      status: [''],
      printed: [false],
      product: this.fb.array([])
    });
  }

  getCategories(): void {
    this.categoryService
        .getAll(API_ROUTES.management.category)
  }

  onFormSubmit(): void {
    // let body: Menu = {
    //   name: this.name.value,
    //   description: this.description.value
    // }

    // this.menuService
    //     .create(API_ROUTES.management.menu, body)
    //     .pipe(
    //       map(newCategory => newCategory.Result.category)
    //     )
    //     .subscribe((newMenu: Menu) => {
    //       this.form.reset();
    //       let success = this.alertService.openOnSuccess(`Menú ${ newMenu.name } creado correctamente.`);
    //       success.afterDismissed()
    //              .subscribe(() => this.onCancel());
    //     });
  }

  onCancel(): void {
    this.router.navigate(['../management/menus/']);
  }
}
