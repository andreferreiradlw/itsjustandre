import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [
    trigger('fadeInRight', [
      state('start', style({
        opacity: 0,
        transform: 'translateX(50%)'
      })),
      state('end', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('start => end', animate('1000ms 1000ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
    ])
  ]
})
export class EmailComponent implements OnInit {
  // parent inputs
  @Input() fadeIn: string;
  constructor() { }

  ngOnInit() {
  }

}
