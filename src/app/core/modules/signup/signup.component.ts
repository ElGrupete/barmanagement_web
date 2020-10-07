import { delay } from 'rxjs/operators';
import { AlertService } from './../../../shared/services/alert/alert.service';
import { SignupService } from './services/signup.service';
import { RoleService } from './../../services/role/role.service';
import { Role } from './../../models/role.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpErrorResponse } from '@angular/common/http';

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

  get userName() { return this.form.get('userName'); }
  get userPassword() { return this.form.get('userPassword'); }
  get role() { return this.form.get('role'); }

  constructor(private fb: FormBuilder,
              private router: Router,
              private alertService: AlertService,
              private roleService: RoleService,
              private signupService: SignupService) { }

  ngOnInit(): void {
    this.formInit();
    this.getRoles()
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
      role: ['', Validators.required]
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      /** Form submittion */
      this.signupService
          .signup(this.userName.value, this.userPassword.value, this.role.value)
          .subscribe(user => {
            console.log(user);
            let success = this.alertService
                              .openOnSuccess(`Usuario ${user.userName} creado exitosamente`);

            success.afterDismissed()
                   .pipe(delay(500))
                   .subscribe(() => this.goHome())

          });
    } else {
      let error = this.alertService.openOnError('Faltan completar campos');

      error.afterDismissed()
           .subscribe(res => console.log(res));
    }
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

}
