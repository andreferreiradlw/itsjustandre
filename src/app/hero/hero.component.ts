import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('fadeInUp', [
      state('start', style({
        opacity: 0,
        transform: 'translateY(50%)'
      })),
      state('end', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('start => end', animate('800ms 650ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
    ])
  ]
})
export class HeroComponent implements OnInit, OnChanges {
  // parent inputs
  @Input() fadeIn: string;
  // animation strings for delays
  hi = 'start';
  name = 'start';
  subtitle = 'start';
  blurb = 'start';
  button = 'start';

  constructor() { }

  ngOnInit() {
  }
  // detect filter changes
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // if changes @Input() fadeIn = end
    if (changes['fadeIn'].currentValue === 'end') {
      setTimeout(this.hi = changes['fadeIn'].currentValue, 500);
      setTimeout(this.name = changes['fadeIn'].currentValue, 600);
      setTimeout(this.subtitle = changes['fadeIn'].currentValue, 700);
      setTimeout(this.blurb = changes['fadeIn'].currentValue, 800);
      setTimeout(this.button = changes['fadeIn'].currentValue, 900);
    }
  }

}
