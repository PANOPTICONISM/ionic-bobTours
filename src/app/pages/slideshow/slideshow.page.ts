import { Component, OnInit } from '@angular/core';
import { BobToursService } from 'src/app/services/bob-tours.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.page.html',
  styleUrls: ['./slideshow.page.scss'],
})
export class SlideshowPage implements OnInit {

  sliderConfig = {
    centeredSlides: true,
    autoplay: { delay: 2400 },
    loop: true
  };

  constructor(public btService: BobToursService) { }

  ngOnInit() {
  }

  manageFavorites(tour) {
    if (!tour.IsFavorite) {
      this.btService.favService.add(tour);
    } else {
      this.btService.favService.remove(tour);
    }
    tour.IsFavorite = !tour.IsFavorite;
  }

}
