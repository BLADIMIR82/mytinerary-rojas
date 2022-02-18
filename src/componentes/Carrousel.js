// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/style.css";
import cities from "../componentes/datos.js"
// import required modules
import { Grid, Autoplay, Pagination, Navigation } from "swiper";

// import required modules

export default function Carrousel() {
  return (
    <div className="carro">
      <h1 className="title">Popular MYtineraries</h1>
    <>
      <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          grid:{
            rows: 2,
          },
          spaceBetween:6,
        },
      
        768: {
          slidesPerView: 2,
              slidesPerGroup: 2,
              grid:{
                rows: 2,
              },
              spaceBetween:6,
        }
      }}
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{
          rows: 2
        }}
        spaceBetween={6}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Grid, Pagination, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        className="mySwiper"
      >
        {cities.map(evento =>
        
            <SwiperSlide>
           <img className="imagenes" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
           <p className="title-card"> {evento.name} </p>
            </SwiperSlide>
          )}
      
      </Swiper>
    </>
    </div>
  );
}



