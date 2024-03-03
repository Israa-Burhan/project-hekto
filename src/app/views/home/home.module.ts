import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { TrendingProductsComponent } from './components/trending-products/trending-products.component';
import { TrendProComponent } from './components/trend-pro/trend-pro.component';
import { ShopexOfferComponent } from './components/shopex-offer/shopex-offer.component';
import { DiscountItemComponent } from './components/discount-item/discount-item.component';
import { LeatestBlogComponent } from './components/leatest-blog/leatest-blog.component';
import { NewslaterComponent } from './components/newslater/newslater.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { SharedModule } from '../shared/shared.module';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from 'src/app/app.module';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    FeaturedProductsComponent,
    LatestProductsComponent,
    TrendingProductsComponent,
    TrendProComponent,
    ShopexOfferComponent,
    DiscountItemComponent,
    LeatestBlogComponent,
    NewslaterComponent,
    TopCategoriesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class HomeModule {}
