import React from "react";
import Image from "next/image";
import CarouselTopCat from "./carouselTopCat";

const datas = [
  {
    id: 1,
    thumbnail: "/img/image 20.png",
    title: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 2,
    thumbnail: "/img/image 1168.png",
    title: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 3,
    thumbnail: "/img/image 20.png",
    title: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 4,
    thumbnail: "/img/image 20.png",
    title: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 5,
    thumbnail: "/img/image 20.png",
    title: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 6,
    thumbnail: "/img/image 20.png",
    title: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 7,
    thumbnail: "/img/image 20.png",
    tittle: "Mini LCW Chair",
    price: "56.00",
  },
  {
    id: 8,
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
          <div>
            <CarouselTopCat datas={datas} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategories;
