import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss']
})
export class FileViewComponent implements OnInit {
  sortMenu = [
    {text: 'test'}
  ];
  groupMenu = [
    {text: 'test'}
  ];
  toolbarButtons = [
    { icon: 'reorder', tooltip: 'Group By', menu: this.groupMenu},
    { icon: 'sort', tooltip: 'Sort By', menu: this.sortMenu },
    { icon: 'view_module', tooltip: 'Grid view', menu: false },
    { icon: 'view_list', tooltip: 'List view', menu: false }
  ];

  constructor(private userService: UserService, private router: Router) {}


  ngOnInit() {
    this.userService.isLoggedIn().subscribe(loggedIn => {
      if (!loggedIn) {
        this.router.navigate(['/login']);
      }
    });
  }
}
