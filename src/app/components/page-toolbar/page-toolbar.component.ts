import { MaterialModule } from './../../material.module';
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-page-toolbar',
  templateUrl: './page-toolbar.component.html',
  styleUrls: ['./page-toolbar.component.css']
})
export class PageToolbarComponent implements OnInit {
  title = "vault";

  @Input() sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

}
