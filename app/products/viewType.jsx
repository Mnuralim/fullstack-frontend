import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import Link from "next/link";

export function GridView({ products }) {
  return (
    <div className="grid grid-cols-4  gap-x-[40px] gap-y-[81px]">
      {products.map((product) => (
        <div key={product._id} className="w-[260px] h-[353px] bg-[#F6F7FB] shadow-md shadow-slate-400 rounded group hover:bg-[#EBF4F3]">
          <div className="w-[260px] h-[280px] bg-[#F6F7FB] flex justify-center items-center relative group-hover:bg-[#EBF4F3] transition-all duration-300 ease-in-out ">
            <Image src={product.thumbnail} layout="fill" className="rounded" alt={product.title} sizes="(max-width: 260px) 259px, 279px" />
            <div className="flex flex-col gap-[12px] absolute left-[-22px] opacity-0 bottom-6 group-hover:opacity-100 group-hover:left-[11px] transition-all duration-500 ease-in-out z-50">
              <div className="">
                <Link className="p-[7px] rounded-full text-[#151875] bg-[rgb(250,142,19)] hover:bg-white" href={"/"}>
                  <ShoppingCartOutlinedIcon className="text-[16px]" />
                </Link>
              </div>
              <div>
                <Link className="p-[7px] rounded-full text-[#151875] bg-[rgb(254,19,152)] hover:bg-white" href={"/"}>
                  <FavoriteBorderOutlinedIcon className="text-[16px]" />
                </Link>
              </div>
              <div>
                <Link className="p-[7px] rounded-full text-[#151875] bg-[rgb(93,52,255)] hover:bg-white" href={`/products/${product._id}`}>
                  <ZoomInOutlinedIcon className="text-[16px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <h2 className="text-[18px] text-[#151875] font-bold">{product.title}</h2>
            <div>
              <span className="w-3 h-3 rounded-full bg-[#DE9034] inline-block mr-[5px]"></span>
              <span className="w-3 h-3 rounded-full bg-[#E60584] inline-block mr-[5px]"></span>
              <span className="w-3 h-3 rounded-full bg-[#5E37FF] inline-block"></span>
            </div>
            <div className="flex justify-center items-center gap-[10px] ">
              <p className="text-[14px] text-[#151875]">${product.price - product.price * (10 / 100)}</p>
              <p>
                <del className="text-[14px]  text-[#FB2E86]">${product.price}</del>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ListView({ products }) {
  return (
    <div className="flex flex-col w-full gap-y-20 ">
      {products.map((product) => (
        <div key={product._id} className="w-full  h-[254px] flex items-center  relative gap-[30px] ">
          <div className="flex justify-center  items-center ">
            <Image src={product.thumbnail} width={203} height={203} alt={product.title} className="w-auto h-auto" />
          </div>
          <div>
            <div className="flex gap-[18px]">
              <h2 className="text-[20px] text-[#111C85] font-semibold">{product.title}</h2>
              <div className="absolute  left-1/2 transform -translate-x-1/2 ">
                <span className="w-3 h-3 rounded-full bg-[#DE9034] inline-block mr-[5px]"></span>
                <span className="w-3 h-3 rounded-full bg-[#E60584] inline-block mr-[5px]"></span>
                <span className="w-3 h-3 rounded-full bg-[#5E37FF] inline-block"></span>
              </div>
            </div>
            <div className="flex items-center gap-[10px] pt-[14px] pb-[11px]">
              <p className="text-[#111C85] text-[15px]">${product.price}</p>
              <p>
                <del className="text-[#FF2AAA] text-[15px]">${product.price}</del>
              </p>
              <div>
                <Rating name="read-only" readOnly value={product.totalrating} size="small" />
              </div>
            </div>
            <p className="w-[590px] text-[#9295AA] font-normal text-[18px] leading-[31px] pb-[31px]">{product.description}</p>
            <div className="flex gap-[34px] text-[#535399]">
              <div className="">
                <Link className=" py-[10px] bg-transparent  px-[10px] rounded-full hover:bg-[#F6F5FF] " href={"/"}>
                  <ShoppingCartOutlinedIcon />
                </Link>
              </div>
              <div>
                <Link className=" py-[10px] bg-transparent  px-[10px] rounded-full hover:bg-[#F6F5FF] " href={"/"}>
                  <FavoriteBorderOutlinedIcon />
                </Link>
              </div>
              <div>
                <Link className=" py-[10px] bg-transparent  px-[10px] rounded-full hover:bg-[#F6F5FF] " href={"/"}>
                  <ZoomInOutlinedIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
