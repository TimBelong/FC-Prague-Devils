import React, { Component } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './BannerSlider.css';

import slider1 from '../../images/slider/slider1.jpg';
import slider2 from '../../images/slider/slider2.jpg';
import slider3 from '../../images/slider/slider3.jpg';


class BannerSlider extends Component {
  render() {
    const { banners } = this.props;

    const slides = banners.map((banner, index) => (
      <SwiperSlide key={index}>
        <div className="slider-container">
          <img className="slider-image" src={[slider1, slider2, slider3][index]} alt={banner.alt} />
          <div className="overlay"></div>
          <div className="banner_content">
            <div className="content_item">
              <div className="item_title">{banner.title}</div>
              <div className="item_text">{banner.text}</div>
            </div>
            <div className="item_btn">
              <button>Read Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));

    return (
      <Swiper
      modules={[Navigation, Pagination]}

        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
      >
        {slides}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    );
  }
}

export default BannerSlider;
