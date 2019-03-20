import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: [
    './page-footer.component.scss'
  ]
})
export class PageFooterComponent implements OnInit {
  linksInfo = [
    {text: 'About', href: '/about', icon: 'help_outline'}
  ];
  lists = [
    {text: 'Information', links: this.linksInfo}
  ];

  constructor() { }

  ngOnInit() {
  }

}
