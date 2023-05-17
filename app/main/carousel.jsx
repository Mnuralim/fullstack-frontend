"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination } from "swiper";

export default function Carousel({ images }) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Pagination]}
        className="flex justify-center items-center w-[270px] h-[236px]"
      >
        {images.map((image) => (
          <div key={image.id}>
            <SwiperSlide key={image.id} className="flex items-center justify-center">
              <div>
                <Image width={270} height={236} src={image.src} alt="product" className="w-[270px] h-[236px] " />
              </div>
            </SwiperSlide>
          </div>
        ))}

        <div className="swiper-pagination "></div>
      </Swiper>
    </div>
  );
}
