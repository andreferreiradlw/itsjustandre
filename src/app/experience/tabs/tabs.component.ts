import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component' ;

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabs: TabComponent[] = [];
  constructor() { }
  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
  selectTab(tab: TabComponent) {
    this.tabs.forEach((otherTab) => {
      otherTab.active = false;
    });
    tab.active = true;
  }

}
