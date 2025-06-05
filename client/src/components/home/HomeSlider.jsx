import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

export const HomeSlider = () => {
  return (
    <>
      <div className="px-2  mx-auto ">
        <Swiper
          Pagination={{
            clickable: true,
          }}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, EffectFade]}
          effect={"fade"}
          className="mySwiper "
        >
          <SwiperSlide>
            <img
              src={
                "https://serviceapi.spicezgold.com/download/1748955897191_NewProject(12).jpg"
              }
              alt=""
              className="rounded-xl  w-full px-4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://serviceapi.spicezgold.com/download/1748955943280_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
              }
              alt=""
              className="rounded-xl w-full px-4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
              }
              alt=""
              className="rounded-xl w-full px-4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
              }
              alt=""
              className="rounded-xl w-full px-4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
