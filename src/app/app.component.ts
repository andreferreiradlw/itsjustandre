import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fadeItems = 'start';

  constructor() {}
  @HostListener('window:beforeunload', ['$event']) onBeforeUnload(event) {
    // scroll to top before exiting website
    window.scrollTo(0, 0);
  }
  onLoadFinished(loaded: any) {
    if (loaded) {
      setTimeout(this.fadeItems = 'end' , 650);
    }
  }
}
