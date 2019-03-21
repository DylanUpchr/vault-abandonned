import { SnackbarService } from './../../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-not-found',
  templateUrl: './resource-not-found.component.html',
  styleUrls: ['./resource-not-found.component.scss']
})
export class ResourceNotFoundComponent implements OnInit {

  constructor(public snackbarService: SnackbarService) { }

  ngOnInit() {
  }
  dismiss(){
    this.snackbarService.dismiss();
  }
}
