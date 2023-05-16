import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./style.css";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const CarouselTopCat = ({ datas }) => {
  return (
    <div className="flex justify-center pt-14 px-[160px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper "
      >
        {datas.map((data) => (
          <div>
            <SwiperSlide key={data.id}>
              <div>
                <div className="w-[269px] h-[345px] flex flex-col items-center group relative">
                  <div className="w-[269px] h-[269px] bg-[#F6F7FB]   rounded-full  flex justify-center items-center border-l-8 border-b-8 border-l-white border-b-white  group-hover: group-hover:border-l-[#7E33E0] group-hover:border-b-[#7E33E0] group-hover:border-opacity-60 transition-colors duration-300 ease-in-out">
                    <Image src={data.thumbnail} width={160} height={160} className="rounded-full" alt={data.title} />
                  </div>
                  <div className="pt-[27px]">
                    <h3 className="text-[#151875] text-xl font-normal">{data.title}</h3>
                    <p className="text-center text-base text-[#151875] font-normal pt-[13px]">${data.price}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-[200px] opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out">
                    <Link href={"/"} className="py-[7px] px-[11px] text-white bg-[#08D15F] rounded-sm font-medium hover:bg-[#0b803a]">
                      View Shop
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
        <div className="w-2 h-2 swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default CarouselTopCat;
