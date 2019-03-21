import { Injectable, Component } from '@angular/core';
import { MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef
 } from '@angular/material';
import { ComponentType } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  /*horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';*/
  snackBarAutoHide = '1500';

  constructor(private snackBar: MatSnackBar) {
   }
   open(component: ComponentType<any>){
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarRef = this.snackBar.openFromComponent(component, this.snackBarConfig);
   }
}
