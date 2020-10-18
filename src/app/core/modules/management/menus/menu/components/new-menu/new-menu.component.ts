import { FileUploadService } from './../../../../../../../shared/services/file-upload/file-upload.service';
import { AlertService } from './../../../../../../../shared/services/alert/alert.service';
import { MenuService } from './../../services/menu.service';
import { Menu } from './../../models/menu.model';
import { DialogService } from '../../../../../../../shared/components/dialog/dialog.component';
import { SelectionDialogModel } from './../../../../../../../shared/models/selection-dialog.model';
import { ProductService } from './../../../product/services/product.service';
import { Product } from './../../../product/models/product.model';
import { ACCEPTED_FILE_TYPES } from './../../../../../../../shared/constants/accepted-file-types';
import { CategoryService } from './../../../category/services/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { map } from 'rxjs/operators';
import { Category } from '../../../category/models/category.model';
import { FileInput, FileInputComponent } from 'ngx-material-file-input';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.scss']
})
export class NewMenuComponent implements OnInit {

  aft = ACCEPTED_FILE_TYPES;
  
  title: string = 'ingresar nuevo menú';
  form: FormGroup;

  categories: Category[] = [];
  products: Product[] = [];
  dialogData: SelectionDialogModel<Product>;
  downloadURL: string;

  @ViewChild('fileInput') fileInput: FileInputComponent;

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
  get category() { return this.form.get('category'); }
  get price() { return this.form.get('price'); }
  get image() { return this.form.get('image'); }
  // get status() { return this.form.get('status'); }
  get printed() { return this.form.get('printed'); }

  constructor(private fb: FormBuilder,
              private router: Router,
              private fileUploadService: FileUploadService,
              private alertService: AlertService,
              private dialogService: DialogService<Product>,
              private menuService: MenuService,
              private categoryService: CategoryService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.formInit();
    this.getCategories();
    this.getProducts();
    this.onProductsAdded();
    this.onImageSelected();
  }

  private formInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      price: ['', Validators.pattern(/^-?\d+\,?\d*$/)], /** This pattern allow numbers and a coma (,) to express floating numbers */
      image: [''], /** This is the FileInput to upload, not the name of the file to save into the DB */
      status: [''],
      printed: [false],
    });
  }

  getCategories(): void {
    this.categoryService
        .getAll(API_ROUTES.management.category)
        .pipe(
          map(allCategories => allCategories.Result.categories)
        )
        .subscribe((categories: Category[]) => this.categories = categories);
  }

  getProducts(): void {
    this.productService
        .getAll(API_ROUTES.management.product)
        .pipe(
          map(allProducts => allProducts.Result.products)
        )
        .subscribe((products: Product[]) => this.dialogData = { items: products, title: 'Listado de productos'});
  }

  onImageSelected(): void {
    this.image
        .valueChanges
        .subscribe((image: FileInput) => {
          if (image != null) {
            this.fileUploadService
                .uploadImage(image.files[0]);
            this.fileUploadService
                .progress$
                .subscribe(progress => {
                  if (progress === 100) {
                    this.fileUploadService
                        .downloadURL$
                        .subscribe(imageURL => {
                          console.log(imageURL);
                          this.downloadURL = imageURL;
                        });
                  }
                })
          }
        });
  }

  onImageDeleted(): void {
    this.fileInput.clear();
    if (this.downloadURL != null) {
      this.fileUploadService
          .deleteImage(this.downloadURL);
    }
  }

  onFormSubmit(): void {
    let body: Menu = {
      name: this.name.value,
      description: this.description.value,
      category: this.category.value,
      price: parseFloat(this.convertCommaToPointFloatNumber(this.price.value)),
      image: this.downloadURL,
      product: this.getProductsId(this.products)
    }

    this.menuService
        .create(API_ROUTES.management.menu, body)
        .pipe(
          map(newMenu => newMenu.Result.menu)
        )
        .subscribe((newMenu: Menu) => {
          this.form.reset();
          let success = this.alertService.openOnSuccess(`Menú ${ newMenu.name } creado correctamente.`);
          success.afterDismissed()
                 .subscribe(() => this.onCancel());
        });
  }

  onProductsAdded(): void {
    this.dialogService.selectedItems$.subscribe(data => {
      this.products = data;
    });
  }

  getProductsId(products: Product[]): string[] {
    let ids: string[] = [];
    products.forEach(product => {
      ids.push(product._id);
    });
    return ids;
  }

  convertCommaToPointFloatNumber(number: string): string {
    return number.replace(',', '.');
  }

  openModal(): void {
    this.dialogService.open(this.dialogData);
  }

  onCancel(): void {
    this.router.navigate(['../management/menus/']);
  }
}
