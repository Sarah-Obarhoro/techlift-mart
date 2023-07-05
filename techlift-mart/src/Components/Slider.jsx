import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import gadgets from '../assets/gadgets.svg'
import './styles/slider.css'

export default function Slider() {
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={gadgets} alt='poster' className='h-[639px] w-full' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={gadgets} alt='poster' className='h-[639px] w-full' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={gadgets} alt='poster' className='h-[639px] w-full' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
