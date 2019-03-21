import { RessourceNotFoundComponent } from './../components/snackbar/ressource-not-found/ressource-not-found.component';
import { Injectable, Component } from '@angular/core';
import { MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef
 } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackBarAutoHide = '3000';

  constructor(private snackBar: MatSnackBar) {
   }
   open(component){
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    setTimeout(() => {
      this.snackBarRef = this.snackBar.openFromComponent(component, this.snackBarConfig);
    }, 20);
   }
}
