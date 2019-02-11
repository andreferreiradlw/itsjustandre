import { Component, OnInit, Renderer2, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition, animateChild, query } from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [
    trigger('fadeOut', [
      state('start', style({
        display: 'flex',
        opacity: 1
      })),
      state('end', style({
        display: 'none',
        visibility: 'hidden',
        opacity: 0
      })),
      transition('start => end', [
        animate('300ms 2500ms ease-out'),
        query('@zoomOut', [
          animateChild()
        ])
      ])
    ]),
    trigger('zoomOut', [
      state('start', style({
        transform: 'scale(1)'
      })),
      state('end', style({
        transform: 'scale(0.8)'
      })),
      transition('start => end', animate('200ms cubic-bezier(0.6, -4, 0.735, 0.045)'))
    ])
  ]
})
export class LoadingComponent implements OnInit, AfterViewInit {
  pageLoaded = 'start';
  pageInit = 'start';
  // event emitter
  @Output() loadFinished: EventEmitter<any> = new EventEmitter();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // disable scrolling
    this.renderer.addClass(document.body, 'no-scroll');
    this.pageInit = 'end';
  }
  ngAfterViewInit() {
    // trigger animations
    setTimeout(() => {
      this.pageLoaded = 'end';
      // allow scrolling after animations
      setTimeout(() => {
        this.renderer.removeClass(document.body, 'no-scroll');
        this.loadFinished.emit(true);
      }, 2500);
    }, 200);
  }
}
