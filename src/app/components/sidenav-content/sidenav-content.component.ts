import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {
  quickLinkItems = [
    {text: 'dashboard', href: '/dashboard', icon: 'dashboard'},
    {text: 'files', href: '/files', icon: 'folder'}
  ];
  userItems = [
    {text: 'My account', href: '/account', icon: 'account_circle'}
  ];


  lists = [
    {text: 'User', items: this.userItems},
    {text: 'Quick Links', items: this.quickLinkItems}
  ];

  @Input() sidenav: MatSidenav;
  constructor() { }

  ngOnInit() {
  }
  closeSidenav(){
    this.sidenav.close();
  }
}
