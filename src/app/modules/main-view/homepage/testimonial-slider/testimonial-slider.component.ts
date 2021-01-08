import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TestimonialService } from '../../../../services/testimonial-service.service'
@Component({
  selector: 'testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss'],

})
export class TestimonialSliderComponent implements OnInit {

  public config2: SwiperConfigInterface = {
    loop: true,
    speed: 1600,
    autoplay: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    slidesPerView: 2,
    spaceBetween: 15,
    // centeredSlides: false,
    breakpoints: {
      992: { slidesPerView: 2 },
      767: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      },
      280: {
      }
    }
  };

clients;

  constructor(TestimonialService : TestimonialService) {
    this.clients = TestimonialService['clients'];
  }

  ngOnInit(): void {
    
  }

}
