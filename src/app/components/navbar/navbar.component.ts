import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // TODO: handle breakpoints of viewport, at 1000px. break the original menu into an hamburger!
  }

}
