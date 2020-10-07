import { CategoryService } from './../../services/category.service';
import { AlertService } from './../../../../../../../shared/services/alert/alert.service';
import { map } from 'rxjs/operators';
import { API_ROUTES } from './../../../../../../../shared/constants/api-routes';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  title: string = 'ingresar nueva categoría';
  form: FormGroup;

  get name() { return this.form.get('categoryName'); }
  get description() { return this.form.get('categoryDescription'); }

  constructor(private fb: FormBuilder,
              private router: Router,
              private alertService: AlertService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({
      categoryName: [''],
      categoryDescription: ['']
    });
  }

  onFormSubmit(): void {
    let body: Category = {
      name: this.name.value,
      description: this.description.value
    }

    this.categoryService
        .create(API_ROUTES.management.category, body)
        .pipe(
          map(newCategory => newCategory.Result.category)
        )
        .subscribe(newCategory => {
          this.form.reset();
          let success = this.alertService.openOnSuccess(`Categoría ${ newCategory.name } creada correctamente.`);
          success.afterDismissed()
                 .subscribe(() => this.onCancel());
        });
  }

  onCancel(): void {
    this.router.navigate(['../management/menus/category']);
  }
}
