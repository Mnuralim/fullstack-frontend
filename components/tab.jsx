import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
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

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="relative flex flex-col items-center">
      <ul className="flex mb-4 text-[#151875] text-[18px] font-normal gap-[60px] capitalize pb-[28px]">
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
      <div>
        {tabs.map((tab) => (
          <motion.div key={tab.id} initial="hidden" animate={activeTab === tab.id ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.3 }}>
            <div className={`${activeTab === tab.id ? "block" : "hidden"}`}>
              <div className="grid grid-cols-3 gap-x-[37px] gap-y-[120px]">
                {tab.product.map((p) => (
                  <motion.div className="w-[360px] h-[306px] shadow-2xl relative group" key={p.id} initial="hidden" animate={activeTab === tab.id ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.3 }}>
                    <div className="w-[360px] h-[270px] bg-[#F6F7FB] flex justify-center items-center group-hover:bg-white transition-colors duration-300 ease-in-out">
                      <Image src={p.thumbnail} width={223} height={230} alt="product" />
                    </div>
                    <div className="flex justify-between pt-3 ">
                      <div>
                        <h2 className="text-[#151875] text-base">{p.title}</h2>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>
                          <p className="text-[#151875] text-sm">${p.discount}</p>
                        </div>
                        <div>
                          <p className="text-[#FB2448] text-xs">
                            <del>${p.price}</del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#1389FF] text-[14px] flex flex-col justify-start px-[15px] pt-3 gap-5 absolute z-10 top-[116px] -left-12  opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <div className="">
                        <Link className=" py-[10px] bg-transparent  px-[10px] rounded-full prod-icon " href={"/"}>
                          <ShoppingCartOutlinedIcon />
                        </Link>
                      </div>
                      <div>
                        <Link className=" py-[10px] bg-transparent  px-[10px] rounded-full prod-icon " href={"/"}>
                          <FavoriteBorderOutlinedIcon />
                        </Link>
                      </div>
                      <div>
                        <Link className=" py-[10px] bg-transparent  px-[10px] rounded-full prod-icon " href={"/"}>
                          <ZoomInOutlinedIcon />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
