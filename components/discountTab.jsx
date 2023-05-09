import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const DiscountTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col items-center relative max-w-[1214px] h-[597px]">
      <ul className="flex mb-4 text-[#151875] text-[18px] font-normal gap-[60px] capitalize pb-2">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`mr-4 p-2 cursor-pointer ${activeTab === tab.id ? "border-b-2 border-[#FB2E86] text-[#FB2E86] transition-colors duration-1000 ease-in-out" : " border-transparent  transition-colors duration-300"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="">
        {tabs.map((tab) => (
          <motion.div key={tab.id} initial="hidden" animate={activeTab === tab.id ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.3 }}>
            <div className={`${activeTab === tab.id ? "block" : "hidden"}`}>
              <div className="grid grid-cols-2 px-20">
                <div className="flex items-center ">
                  <div>
                    <h1 className="text-[35px] text-[#151875] font-semibold">20% Discount Of All Products</h1>
                    <h2 className="text-[21px] text-[#FB2E86] pt-4 pb-5">{tab.product.title}</h2>
                    <p className="max-w-[520px] text-[#B7BACB] font-normal text-[17px]">{tab.product.description}</p>
                    <div className="grid grid-cols-2 pt-7  gap-y-[10px]">
                      <div>
                        <div className="flex items-center gap-[6px] text-[#B8B8DC] text-base font-normal">
                          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1L6 12L1 7" stroke="#7569B2" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Material expose like metals
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-[6px] text-[#B8B8DC] text-base font-normal">
                          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1L6 12L1 7" stroke="#7569B2" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Clear lines and geomatric figures
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-[6px] text-[#B8B8DC] text-base font-normal">
                          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1L6 12L1 7" stroke="#7569B2" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Simple neutral colours.
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-[6px] text-[#B8B8DC] text-base font-normal">
                          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1L6 12L1 7" stroke="#7569B2" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Material expose like metals
                        </div>
                      </div>
                    </div>
                    <div className="pt-[47px] ">
                      <Link href={"/"} className="py-4 px-[40px] bg-[#FB2E86] hover:bg-purple transition duration-300 text-white rounded-sm">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center relative">
                  <Image src={tab.product.thumbnail} width={699} height={597} className="z-20" alt="product" />
                  <div className="absolute z-10">
                    <svg width="481" height="450" viewBox="0 0 481 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z" fill="#F5E1FC" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DiscountTab;
