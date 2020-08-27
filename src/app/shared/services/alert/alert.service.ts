import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef}  from '@angular/material/snack-bar';
import { SuccessComponent } from '../../components/alerts/success/success.component';
import { ErrorComponent } from '../../components/alerts/error/error.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }

  openOnSuccess(message?: string): MatSnackBarRef<SuccessComponent> {
    let successRef$: MatSnackBarRef<SuccessComponent>;
    successRef$ = this.snackBar.openFromComponent(SuccessComponent, {
      duration: 5000,
      data: message
    });

    return successRef$;
  }

  openOnError(message?: string): MatSnackBarRef<ErrorComponent> {
    let errorRef$: MatSnackBarRef<ErrorComponent>;
    errorRef$ = this.snackBar.openFromComponent(ErrorComponent, {
      duration: 3000,
      data: message
    }); 

    return errorRef$;
  }

}
