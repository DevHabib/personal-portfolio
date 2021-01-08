import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './index';

import { HomepageRoutingModule } from './homepage-routing.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [components.component],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],

})
export class HomepageModule {
  constructor() {
    // console.log("Hompage Module Loaded");
  }
}
