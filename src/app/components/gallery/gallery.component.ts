import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: [
  ]
})
export class GalleryComponent implements OnInit {

  @Input() movies: any;
  @Input() title: any;
  constructor() { }

  ngOnInit(): void {
  }

}
