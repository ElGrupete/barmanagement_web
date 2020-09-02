import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../../shared/services/alert/alert.service';
import { LoginService  } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  get userName() { return this.form.get('userName'); }
  get password() { return this.form.get('userPassword'); }

  constructor(private fb: FormBuilder,
              private router: Router,
              private loginService: LoginService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  onFormSubmit(): void {
    if (this.form.valid) {
      /* Form submittion */
      this.loginService
          .login(this.userName.value, this.password.value)
          .subscribe(user => {
            console.log(user);
            let success = this.alertService.openOnSuccess(`Logueado exitosamente, ${user.userName}`);
            this.goToHome();
          });
    }
    else {
      let error = this.alertService.openOnError('Faltan completar campos');
      error
        .afterDismissed()
        .subscribe(res => console.log(res));
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

}
