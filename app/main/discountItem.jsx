import DiscountTab from "@/components/discountTab";
import Tabs from "@/components/tab";
import React from "react";

const tabs1 = [
  {
    id: 1,
    label: "Wood Chair",
    product: { id: 1, title: "Comfort Handy Craft", discount: "20%", thumbnail: "/img/tortuga-01-b 1.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum." },
  },
  {
    id: 2,
    label: "Plastic Chair",
    product: { id: 1, title: "Comfort Handy Craft", discount: "20%", thumbnail: "/img/tortuga-01-b 1.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum." },
  },
  {
    id: 3,
    label: "Sofa Colletion",
    product: { id: 1, title: "Comfort Handy Craft", discount: "20%", thumbnail: "/img/tortuga-01-b 1.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum." },
  },
];

const DiscountItem = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-[#1A0B5B] text-[42px] font-semibold text-center pt-[126px]">Discount Item</h1>
        </div>
        <div className="flex justify-center pt-[33px]">
          <DiscountTab tabs={tabs1} />
        </div>
      </section>
    </>
  );
};

export default DiscountItem;
