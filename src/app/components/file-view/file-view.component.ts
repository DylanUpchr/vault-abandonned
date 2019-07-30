import { FileService } from './../../services/file.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss']
})
export class FileViewComponent implements OnInit {
<<<<<<< HEAD
  // Toolbar menus
=======
  // ---- Toolbar Button Lists -------------------------------------------------------------------
>>>>>>> 39adabc61cdf1d6bba31ab9e5357f5a97600e3c0
  directionToggle = [
    {text: 'ascending', value: 'asc', icon: 'arrow_upward', checked: false },
    {text: 'descending', value: 'desc', icon: 'arrow_downward', checked: true }
  ];
  sortMenu = [
    {text: 'name', icon: 'sort_by_alpha', checked: true },
    {text: 'date', icon: 'calendar_today', checked: false },
    {text: 'size', icon: 'data_usage', checked: false }
  ];
  groupMenu = [
    {text: 'date', icon: 'calendar_today', checked: false },
    {text: 'type', icon: 'insert_drive_file', checked: false }
  ];
  toolbarButtons = [
    { icon: 'reorder', tooltip: 'Group By', typeMenu: this.groupMenu, directionMenu: this.directionToggle },
    { icon: 'sort', tooltip: 'Sort By', typeMenu: this.sortMenu, directionMenu: this.directionToggle },
    { icon: 'view_module', tooltip: 'Grid view', typeMenu: false, directionMenu: false },
    { icon: 'view_list', tooltip: 'List view', typeMenu: false, directionMenu: false }
  ];

  // Search input
  searchFormGroup = new FormGroup({
    inputSearch: new FormControl('')
  });

  // Directory contents
  Directory: string;
  Files: Observable<object>;

  onKeydown(event) {
    const inputSearch = document.getElementById('inputSearch');
    if (event.key === 'Escape') {
      inputSearch.blur();
    }
  }
  onSubmit() {
    console.log(this.searchFormGroup.value.inputSearch);
  }

  constructor(private userService: UserService,
              private router: Router,
              private fileService: FileService) {}


  ngOnInit() {
    this.Directory = '/';
    // ---- Logged in ---------------------------------------------------------------------
    this.userService.isLoggedIn().subscribe(loggedIn => {
      if (!loggedIn) {
        this.router.navigate(['/login']);
      }
    });
    this.Files = this.fileService.getFilesInDirectory(this.Directory, this.userService.getUserId());
    this.Files.subscribe(x => console.log(x));
  }
}
