import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss']
})
export class FileViewComponent implements OnInit {
  toolbarButtons = [
    { icon: 'filter_list', tooltip: 'Group By'},
    { icon: 'sort', tooltip: 'Sort By' },
    { icon: 'view_module', tooltip: 'Grid view' },
    { icon: 'view_list', tooltip: 'List view' }
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
