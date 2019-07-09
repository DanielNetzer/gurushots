import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public gifUrl: SafeUrl = null;
  constructor(
    private sanitizer: DomSanitizer,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=UIwcU7NMw7jsD2V8lKQXpBSgtML64k88&s=fail')
      .then(response => {
        return response.json();
      })
      .then(gif => {
        this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl(gif.data.embed_url);
        this.cdRef.detectChanges();
      })
      .catch(err => console.error(err));
  }

}
