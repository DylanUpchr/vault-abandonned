import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ResourceNotFoundComponent } from '../snackbar/resource-not-found/resource-not-found.component';
import { SnackbarService } from '../../services/snackbar.service';


@Component({
  selector: 'app-component-not-found',
  templateUrl: './component-not-found.component.html',
  styleUrls: ['./component-not-found.component.scss']
})
export class ComponentNotFoundComponent implements OnInit {

  constructor(public snackbarService: SnackbarService,
              private router: Router) { }

  ngOnInit() {
    this.snackbarService.open(ResourceNotFoundComponent);
    this.router.navigate(['/']);
  }

}
