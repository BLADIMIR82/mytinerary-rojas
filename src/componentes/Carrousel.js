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

export default function App() {
  return (
    <div className="carro">
    <>
      <Swiper
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{
          rows: 2
        }}
        spaceBetween={2}
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
            {evento.name}
            </SwiperSlide>
          )}
      
      </Swiper>
    </>
    </div>
  );
}



// {cities.map(evento =>
//   //           <SwiperSlide>
//   //          <img className="imagenes" src={process.env.PUBLIC_URL+ `/imagenes/${evento.image}`} />
//   //           {evento.name}
//   //           </SwiperSlide>
//   //         )}

// import cities from "./datos"
{/* <div className="carro">
  </div> */}