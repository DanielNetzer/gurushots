import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { BadgedImage } from 'src/app/models/badged-image.model';
declare var ScrollMagic: any;

@Component({
  selector: 'gs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren('galleryImg', { read: ElementRef }) galleryImgs: QueryList<ElementRef>;
  @ViewChildren('imgBadge', { read: ElementRef }) imgBadges: QueryList<ElementRef>;

  ctrl = new ScrollMagic.Controller();

  heroes: Hero[] = [
    {
      title: 'Improve Your Photo Taking Skills',
      story: 'Experiment with your photos bla bla, Experiment with your photos bla bla, Experiment with your photos bla bla, Experiment with your photos bla bla...',
      cta: {
        text: 'Join Now, it\'s free',
        link: '/signup'
      }
    }
  ]

  gallery: BadgedImage[] = [
    {
      imageLink: 'assets/large.jpg',
      badgeLink: 'assets/guru-badge.png'
    },
    {
      imageLink: 'assets/large.jpg',
      badgeLink: null
    },
    {
      imageLink: 'assets/large.jpg',
      badgeLink: null
    },
    {
      imageLink: 'assets/large.jpg',
      badgeLink: null
    },
    {
      imageLink: 'assets/large.jpg',
      badgeLink: null
    },
    {
      imageLink: 'assets/large.jpg',
      badgeLink: 'assets/guru-badge.png'
    },
    {
      imageLink: 'assets/large.jpg',
      badgeLink: 'assets/guru-badge.png'
    },
    {
      imageLink: 'assets/large.jpg',
      badgeLink: null
    },
    {
      imageLink: 'assets/large.jpg',
      badgeLink: null
    }
  ]

  constructor() { }

  ngOnInit() {
    this.animateSecondRowHero();
    this.animateThirdRowHero();
    this.animateThirdRowImg();
  }

  ngAfterViewInit() {
    this.animateSecondRowGallery();
    this.pinSecondRow();
  }

  pinSecondRow() {
    new ScrollMagic.Scene({ triggerElement: '.second', duration: window.innerHeight / 2, offset: window.innerHeight / 2.4 })
      .setPin('.second')
      .addTo(this.ctrl);
  }

  // animate third section hero
  animateThirdRowHero() {
    new ScrollMagic.Scene({
      triggerElement: '.second',
      duration: window.innerHeight,
      offset: window.innerHeight * 1.5
    })
      .setTween('.third-hero', { opacity: 1 })
      .addTo(this.ctrl);
  }

  animateThirdRowImg() {
    new ScrollMagic.Scene({
      triggerElement: '.second',
      duration: window.innerHeight,
      offset: window.innerHeight * 1.5
    }).setTween('.third-img', { transform: 'scale(1.2)' })
      .addTo(this.ctrl);
  }


  // animate second section hero
  animateSecondRowHero() {
    new ScrollMagic.Scene({
      triggerElement: '.second',
      duration: window.innerHeight / 2
    })
      .setTween('.second-hero', { opacity: 1 })
      .addTo(this.ctrl);
  }

  // animate second section gallery
  animateSecondRowGallery() {
    this.galleryImgs.forEach((img, i) => {
      new ScrollMagic.Scene({
        triggerElement: '.second',
        duration: window.innerHeight / 5,
        offset: 30 * i
      })
        .setTween(img.nativeElement, { transform: 'scale(1)' })
        .addTo(this.ctrl);
    })

    this.imgBadges.forEach((badge, i) => {
      new ScrollMagic.Scene({
        triggerElement: '.second',
        duration: window.innerHeight / 5,
        offset: 50 * (i + this.galleryImgs.length)
      })
        .setTween(badge.nativeElement, { transform: 'scale(1)' })
        .addTo(this.ctrl);
    })
  }

}
