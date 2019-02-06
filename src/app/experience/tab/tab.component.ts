import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() tabTitle: any;
  active = false;
  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

}
