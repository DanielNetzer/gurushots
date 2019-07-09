import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input('title') title: string;
  @Input('story') story: string;
  @Input('cta') cta: { text: string, link: string };

  constructor() { }

  ngOnInit() {
  }

}
