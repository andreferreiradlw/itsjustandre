import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuOpen = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  onMenuClick() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.renderer.addClass(document.body, 'blur');
    } else {
      this.renderer.removeClass(document.body, 'blur');
    }
  }

}
