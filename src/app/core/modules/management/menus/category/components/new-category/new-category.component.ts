import { NavigationService } from './../../../../../../../shared/services/navigation.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  title: string = 'ingresar nueva categoría';
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private navService: NavigationService) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({
      categoryName: ['']
    });
  }

  onFormSubmit(): void {

  }

  onCancel(): void {
    this.navService.goBack();
  }
}
