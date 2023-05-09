"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination } from "swiper";

export default function Carousel({ images, width, height, component }) {
  return (
    <div className="flex justify-center items-center w-[270px] h-[236px]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Pagination]}
        className="w-full h-full relative"
      >
        {images.map((image) => (
          <>
            <SwiperSlide className="flex justify-center items-center">
              <Image width={width} height={height} src={image.src} />
            </SwiperSlide>
          </>
        ))}

        <div className="swiper-pagination  "></div>
      </Swiper>
    </div>
  );
}
