import { Component, OnInit, Renderer2, Input, SimpleChange, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('fadeInDown', [
      state('start', style({
        transform: 'translateY(-100%)'
      })),
      state('end', style({
        transform: 'translateY(0)'
      })),
      transition('start => end', animate('800ms 500ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
    ]),
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
export class MenuComponent implements OnInit, OnChanges {
  menuOpen = false;
  // parent inputs
  @Input() fadeIn: string;
  fadeInMenu = 'start';

  constructor(private renderer: Renderer2, private _scrollToService: ScrollToService) { }

  ngOnInit() {}
  // detect filter changes
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // if changes @Input() fadeIn = end
    if (changes['fadeIn'].currentValue === 'end') {
      this.fadeInMenu = changes['fadeIn'].currentValue;
    }
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
    // on logo click do not open the menu
    if (destination !== 'home') {
      this.menuOpen = !this.menuOpen;
      this.renderer.removeClass(document.body, 'blur');
    }
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
