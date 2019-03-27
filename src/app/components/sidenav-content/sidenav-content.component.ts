import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Roles } from '../../classes/user';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {
  quickLinkItems = [
    {text: 'files', href: '/files', icon: 'folder'},
    {text: 'settings', href: '/settings', icon: 'settings'}
  ];
  userItems = [
    {text: 'my account', href: '/account', icon: 'account_circle'}
  ];
  adminItems = [
    {text: 'dashboard', href: '/dashboard', icon: 'dashboard'}
  ];

  lists = [
    {text: 'user', items: this.userItems, visibleIfRole: Roles.User},
    {text: 'quick links', items: this.quickLinkItems, visibleIfRole: Roles.Guest},
    {text: 'administration', items: this.adminItems, visibleIfRole: Roles.Admin}
  ];

  @Input() sidenav: MatSidenav;
  constructor(private userService: UserService) { }
  ngOnInit() {}
  isVisible(list): Observable<boolean> {
    const result = new BehaviorSubject<boolean>(false);
    this.userService.getUserRole().subscribe(role => {
      switch (list.visibleIfRole) {
        case Roles.Guest:
          result.next(true);
          break;
        case Roles.User:
          result.next(role === Roles.User || role === Roles.Admin);
          break;
        case Roles.Admin:
          result.next(role === Roles.Admin);
          break;
      }
    });
    return result;
  }
}
