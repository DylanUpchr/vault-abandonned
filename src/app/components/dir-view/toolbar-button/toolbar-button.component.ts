import { Component, OnInit, Input } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'app-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss']
})
export class ToolbarButtonComponent implements OnInit {
  Tooltip: string;
  Icon: string;
  TypeMenu: any;
  DirectionMenu: any;
  constructor() { }
  @Input() toolbarButton: any;
  ngOnInit() {
    this.Tooltip = this.toolbarButton.tooltip;
    this.Icon = this.toolbarButton.icon;
    this.TypeMenu = this.toolbarButton.typeMenu;
    this.DirectionMenu = this.toolbarButton.directionMenu;
  }

}
