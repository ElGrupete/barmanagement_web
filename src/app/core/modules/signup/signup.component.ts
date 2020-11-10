import { ResponseTable, Table } from './../management/tables/models/table.model';
import { TablesService } from './../management/tables/services/tables.service';
import { SectorService } from './../management/tables/services/sector.service';
import { delay, map } from 'rxjs/operators';
import { AlertService } from './../../../shared/services/alert/alert.service';
import { SignupService } from './services/signup.service';
import { RoleService } from './../../services/role/role.service';
import { Role } from './../../models/role.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { ResponseSector } from '../management/tables/models/sector.model';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { AlertMessages } from 'src/app/shared/constants/alert-messages';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  title: string = 'registrarse';
  form: FormGroup;
  matcher = new ErrorStateMatcher();

  roles: Role[] = [];

  sectors: ResponseSector[] = [];

  isTableRole: boolean = false;
  isWaiterRole: boolean = false;

  get userName() { return this.form.get('userName'); }
  get userPassword() { return this.form.get('userPassword'); }
  get role() { return this.form.get('role'); }

  get number() { return this.form.get('number'); }
  get capacity() { return this.form.get('capacity'); }
  get sector() { return this.form.get('sector'); }


  constructor(private fb: FormBuilder,
              private router: Router,
              private alertService: AlertService,
              private roleService: RoleService,
              private tableService: TablesService,
              private sectorService: SectorService,
              private signupService: SignupService) { }

  ngOnInit(): void {
    this.formInit();
    this.getRoles();
    this.onRoleChange();
  }

  private getRoles() {
    this.roleService
        .getRoles()
        .subscribe(roles => this.roles = roles)
  }

  private formInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      userPassword: ['', Validators.required],
      role: ['', Validators.required],

      number: [0, [Validators.required, Validators.pattern(/^\d+$/)]],
      capacity: [2, [Validators.required, Validators.pattern(/^\d+$/)]],
      available: [true],
      booked: [false],
      sector: ['', [Validators.required]]
    });
  }

  /** CHECKING ROLE CHANGE */

  private onRoleChange(): void {
    this.role
        .valueChanges
        .subscribe((roleId: any) => {
          if (roleId == this.getTableRoleId()) {
            this.getSectors();
            this.getTables();
            this.isTableRole = true;
          }

          if (roleId == this.getWaiterRoleId()) {
            this.isWaiterRole = true;
          }

          if (roleId == this.getAdminRoleId()) {
            this.isTableRole = false;
            this.isWaiterRole = false;
          }
        });
  }

  private getTableRoleId(): string {
    let id = '';
    this.roles.forEach(role => {
      if (role.name === 'Mesa') {
        id = role._id;
      }
    })
    return id;
  }

  private getWaiterRoleId(): string {
    let id = '';
    this.roles.forEach(role => {
      if (role.name === 'Camarero') {
        id = role._id;
      }
    })
    return id;
  }

  private getAdminRoleId(): string {
    let id = '';
    this.roles.forEach(role => {
      if (role.name === 'Admin') {
        id = role._id;
      }
    })
    return id;
  }

  /** TABLE */

  patchInitialFormValues(number: number): void {
    this.number.patchValue(number);
  }

  setDefaultCapacity(): void {
    this.capacity.patchValue(2)
  }

  getTables(): void {
    this.tableService
        .getAll(API_ROUTES.config.table)
        .pipe(
          map(allTables => allTables.Result.tables)
        )
        .subscribe((tables: ResponseTable[]) => {
          if (tables.length == 0) {
            this.patchInitialFormValues(tables.length + 1)
            this.alertService
                .openOnError(AlertMessages.noData.noResults)
          }
          this.patchInitialFormValues(tables.length + 1)
        })
  }


  getSectors(): void {
    this.sectorService
        .getAll(API_ROUTES.config.sector)
        .pipe(
          map(allSectors => allSectors.Result.sectors)
        )
        .subscribe((sectors: ResponseSector[]) => {
          this.sectors = sectors;
        })
  }

  /** FORM SUBMIT */

  onFormSubmit() {
    if (this.form.valid) {
      let table: Table = {
        available: true,
        booked: false,
        number: this.number.value,
        people: this.capacity.value,
        sector: this.sector.value,
      }
      /** Form submittion */
      this.signupService
          .signup(this.userName.value, this.userPassword.value, this.role.value, table)
          .subscribe(user => {
            console.log(user);
            let success = this.alertService
                              .openOnSuccess(`Usuario ${user.userName} creado exitosamente`);

            success.afterDismissed()
                   .pipe(delay(500))
                   .subscribe(() => this.goToManagement())

          });
    } else {
      let error = this.alertService.openOnError('Faltan completar campos');

      error.afterDismissed()
           .subscribe(res => console.log(res));
    }
  }

  goToManagement(): void {
    this.router.navigate(['/management']);
  }

}
