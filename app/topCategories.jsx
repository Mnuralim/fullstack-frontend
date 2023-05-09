import React from "react";
import Image from "next/image";
import CarouselTopCat from "./carouselTopCat";

const datas = [
  {
    id: 1,
    thumbnail: "/img/image 20.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 2,
    thumbnail: "/img/image 1168.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 3,
    thumbnail: "/img/image 20.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 2,
    thumbnail: "/img/image 20.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 2,
    thumbnail: "/img/image 20.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 2,
    thumbnail: "/img/image 20.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 2,
    thumbnail: "/img/image 20.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 2,
    thumbnail: "/img/image 20.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
];

const TopCategories = () => {
  return (
    <>
      <section>
        <div className="w-full">
          <div>
            <h1 className="text-[#1A0B5B] text-[42px] font-semibold text-center pt-[126px]">Top Categories</h1>
          </div>
          <div className="flex justify-center pt-14 px-[160px]">
            <CarouselTopCat datas={datas} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategories;
