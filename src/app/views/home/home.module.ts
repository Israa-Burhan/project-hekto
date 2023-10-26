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


@NgModule({
  declarations: [HomeComponent, SliderComponent, FeaturedProductsComponent, LatestProductsComponent, TrendingProductsComponent, TrendProComponent, ShopexOfferComponent, DiscountItemComponent],
  imports: [CommonModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule { }
