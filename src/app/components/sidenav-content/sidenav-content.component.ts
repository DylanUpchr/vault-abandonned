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
    {text: 'files', href: '/files', icon: 'folder'},
    {text: 'settings', href: '/settings', icon: 'settings'}
  ];
  userItems = [
    {text: 'my account', href: '/account', icon: 'account_circle'}
  ];


  lists = [
    {text: 'user', items: this.userItems},
    {text: 'quick links', items: this.quickLinkItems}
  ];

  @Input() sidenav: MatSidenav;
  constructor() { }

  ngOnInit() {
  }
  closeSidenav(){
    this.sidenav.close();
  }
}
