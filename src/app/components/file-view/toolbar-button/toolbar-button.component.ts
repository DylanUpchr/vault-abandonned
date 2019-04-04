import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss']
})
export class ToolbarButtonComponent implements OnInit {
  Tooltip: string;
  Icon: string;
  Menu: any;
  constructor() { }
  @Input() toolbarButton: any;
  ngOnInit() {
    this.Tooltip = this.toolbarButton.tooltip;
    this.Icon = this.toolbarButton.icon;
    this.Menu = this.toolbarButton.menu;
  }

}
