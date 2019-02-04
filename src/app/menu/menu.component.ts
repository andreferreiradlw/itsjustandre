import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('false', style({
        transform: 'translateX(100%)'
      })),
      state('true', style({
        transform: 'translateX(0)'
      })),
      transition('closed <=> open', animate('400ms ease-in-out'))
    ])
  ]
})
export class MenuComponent implements OnInit {
  menuOpen = false;

  constructor(private renderer: Renderer2, private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }
  onBurgerClick() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.renderer.addClass(document.body, 'blur');
    } else {
      this.renderer.removeClass(document.body, 'blur');
    }
  }
  onMenuOptionClick(destination: string) {
    this.menuOpen = !this.menuOpen;
    this.renderer.removeClass(document.body, 'blur');
    // smooth scroll config
    const config: ScrollToConfigOptions = {
      target: destination,
      duration: 1050,
      easing: 'easeInOutQuart',
      offset: 0
    };
    this._scrollToService.scrollTo(config);
  }
}
