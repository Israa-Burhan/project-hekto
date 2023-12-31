import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss'],
})
export class TopCategoriesComponent {
  public home: any;
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin: 20,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
    nav: false,
  };

  constructor(private http: HttpClient) {}

  createtopCate() {
    this.http.get('assets/api/home.json').subscribe((data: any) => {
      this.home = data.home;
    });
  }
  ngOnInit() {
    this.createtopCate();
  }
}
