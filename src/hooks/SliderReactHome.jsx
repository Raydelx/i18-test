// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import './style.css';

export default function App({IMG}) {
 
   return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  mx-8"
        
      >
       {IMG.map(function(i, index) {
          return <SwiperSlide key={index}><img className="m-auto h-[350px] md:h-[85vh] object-cover w-full"  src={i.src}/></SwiperSlide>;
        })}      
      </Swiper>
    </>
  );
}
