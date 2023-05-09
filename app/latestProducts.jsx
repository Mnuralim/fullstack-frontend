import React from "react";

import Tabs from "@/components/tab";

const tabs1 = [
  {
    id: 1,
    label: "New Arrival",
    product: [
      { id: 1, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/cuaks.png" },
      { id: 2, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 1168.png" },
      { id: 3, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 23.png" },
      { id: 4, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 1166.png" },
      { id: 5, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 32 (1).png" },
      { id: 6, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 3.png" },
    ],
  },
  {
    id: 2,
    label: "Best Seller",
    product: [
      { id: 1, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 1168.png" },
      { id: 2, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/cuaks.png" },
      { id: 3, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 23.png" },
      { id: 4, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 1166.png" },
      { id: 5, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 32 (1).png" },
      { id: 6, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 3.png" },
    ],
  },
  {
    id: 3,
    label: "Featured",
    product: [
      { id: 1, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 23.png" },
      { id: 2, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 1168.png" },
      { id: 3, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/cuaks.png" },
      { id: 4, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 1166.png" },
      { id: 5, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 32 (1).png" },
      { id: 6, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 3.png" },
    ],
  },
  {
    id: 4,
    label: "Special Offer",
    product: [
      { id: 1, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 1166.png" },
      { id: 2, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 1168.png" },
      { id: 3, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 23.png" },
      { id: 4, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/cuaks.png" },
      { id: 5, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 32 (1).png" },
      { id: 6, title: "Comfort Handy Craft", price: "65.00", discount: "42.00", thumbnail: "/img/image 3.png" },
    ],
  },
];
const LatestProducts = () => {
  return (
    <>
      <section className="pt-[88px]">
        <div className="w-full ">
          <div className="flex justify-center  pb-8">
            <h1 className="text-[#1A0B5B] text-[42px] font-semibold">Latest Products</h1>
          </div>
          <div className="flex  justify-center">
            <Tabs tabs={tabs1} />
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProducts;
