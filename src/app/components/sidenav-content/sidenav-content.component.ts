import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {
  items = [
    {text: 'dashboard', href: '/dashboard', icon: 'dashboard'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
