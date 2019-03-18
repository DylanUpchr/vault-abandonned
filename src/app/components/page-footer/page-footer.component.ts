import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: [
    './page-footer.component.scss'
  ]
})
export class PageFooterComponent implements OnInit {
  text = 'footer';

  /*links = {
    item1: {
      text: 'Item 1',
      href: '#'
    }
  };*/
  links = [
    {text: 'About', href: '/about', icon: 'help_outline'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
