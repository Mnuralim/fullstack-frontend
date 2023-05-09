"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./carousel";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import LatestProducts from "./latestProducts";
import Offer from "./offer";
import TrendProduct from "./trendProduct";
import Subs from "./subs";
import DiscountItem from "./discountItem";
import TopCategories from "./topCategories";
import LeatestBlog from "./leatestBlog";

export default function Home() {
  const imageProduct1 = [
    { src: "/img/image 1168.png", alt: "Image 1" },
    { src: "/img/image 1.png", alt: "Image 2" },
    { src: "/img/image 1169.png", alt: "Image 3" },
    { src: "/img/image 3.png", alt: "Image 3" },
  ];

  const imageProduct2 = [
    { src: "/img/image 1.png", alt: "Image 2" },
    { src: "/img/image 1168.png", alt: "Image 1" },
    { src: "/img/image 1169.png", alt: "Image 3" },
    { src: "/img/image 3.png", alt: "Image 3" },
  ];
  const imageProduct3 = [
    { src: "/img/image 1169.png", alt: "Image 1" },
    { src: "/img/image 1.png", alt: "Image 2" },
    { src: "/img/image 1168.png", alt: "Image 3" },
    { src: "/img/image 3.png", alt: "Image 3" },
  ];
  const imageProduct4 = [
    { src: "/img/image 3.png", alt: "Image 3" },
    { src: "/img/image 1169.png", alt: "Image 1" },
    { src: "/img/image 1.png", alt: "Image 2" },
    { src: "/img/image 1168.png", alt: "Image 3" },
  ];

  return (
    <>
      <section className="pl-3 pt-[121px] ">
        <div className="bg-[#F2F0FF] w-full h-screen grid grid-cols-2">
          <div className="h-full w-full flex items-center justify-center">
            <div className=" w-[644px] h-[325px]">
              <h2 className="text-[#FB2E86]">Best Furniture For Your Castle....</h2>
              <h1 className="text-[53px] tracking-[1.5%] font-bold text-black pt-3">New Furniture Collection Trends in 2023</h1>
              <p className="font-bold text-[#8A8FB9] pt-3 pb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <div>
                <Link href={"/"} className="py-4 px-[40px] bg-[#FB2E86] hover:bg-purple transition duration-300 text-white rounded-sm">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full w-full  flex items-center justify-center relative z-10">
            <div className="z-10">
              <div className="z-30  top-11">
                <Image src={"/img/chair.png"} width={629} height={629}></Image>
              </div>
            </div>
            <div className="absolute z-0">
              <svg width="706" height="689" viewBox="0 0 481 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z" fill="#F5E1FC" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[88px]">
        <div className="w-full px-[150px]">
          <div className="flex justify-center w-full pb-12">
            <h1 className="text-[#1A0B5B] text-[42px] font-semibold">Featured Products</h1>
          </div>
          <div className="flex gap-[30px] justify-center">
            <div className="w-[270px] h-[361px] flex justify-center shadow-md rounded overflow-hidden relative group">
              <div className="bg-[#F6F7FB] w-[270px] h-[236px] relative  z-20">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div className="text-[#1389FF] text-[14px] flex justify-start px-[15px] pt-3 gap-5 absolute z-10 -left-44 group-hover:left-0 transition-all duration-500">
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
                </div>
                <div className="flex justify-center items-center w-[270px] h-[236px] relative">
                  {/* <Image width={178} height={178} src={"/img/image 1168.png"} /> */}
                  <div className="flex justify-center items-center w-[270px] h-[236px]">
                    <Carousel images={imageProduct1} width={130} height={130} />
                  </div>
                </div>

                <div className="pt-[15px] group-hover:bg-[#2F1AC4] h-full transition-all duration-300 ease-in-out">
                  <h2 className="text-[#FB2E86] text-[18px] font-bold text-center  group-hover:text-[#ffffff] pb-3">Cantilever chair</h2>

                  <h3 className="text-[#151875] text-[14px] font-medium text-center pb-3 group-hover:text-[#ffffff]">Code - Y523201</h3>
                  <h3 className="text-[#151875] text-[14px] text-center group-hover:text-[#ffffff]">$42.00</h3>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[185px] opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out">
                <Link href={"/"} className="py-[7px] px-[11px] text-white bg-[#08D15F] rounded-sm font-medium hover:bg-[#0b803a]">
                  View Details
                </Link>
              </div>
            </div>
            <div className="w-[270px] h-[361px] shadow-md rounded flex justify-center overflow-hidden relative group">
              <div className="bg-[#F6F7FB] w-[270px] h-[236px]  relative  z-20">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div className="text-[#1389FF] text-[14px] flex justify-start px-[15px] pt-3 gap-5 absolute z-10 -left-44 group-hover:left-0 transition-all duration-500">
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
                </div>
                <div className="flex justify-center items-center w-[270px] h-[236px] relative">
                  {/* <Image width={178} height={178} src={"/img/image 1168.png"} /> */}
                  <div className="flex justify-center items-center w-[270px] h-[236px]">
                    <Carousel images={imageProduct2} width={130} height={130} />
                  </div>
                </div>

                <div className="pt-[15px] group-hover:bg-[#2F1AC4] h-full transition-all duration-300 ease-in-out">
                  <h2 className="text-[#FB2E86] text-[18px] font-bold text-center  group-hover:text-[#ffffff] pb-3">Cantilever chair</h2>

                  <h3 className="text-[#151875] text-[14px] font-medium text-center pb-3 group-hover:text-[#ffffff]">Code - Y523201</h3>
                  <h3 className="text-[#151875] text-[14px] text-center group-hover:text-[#ffffff]">$42.00</h3>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[185px] opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out">
                <Link href={"/"} className="py-[7px] px-[11px] text-white bg-[#08D15F] rounded-sm font-medium hover:bg-[#0b803a]">
                  View Details
                </Link>
              </div>
            </div>
            <div className="w-[270px] h-[361px] shadow-md rounded overflow-hidden relative group flex justify-center">
              <div className="bg-[#F6F7FB] w-[270px] h-[236px] relative  z-20">
                <div className="opacity-0  group-hover:opacity-100 transition-all duration-300 ease-in-out relative">
                  <div className="text-[#1389FF] text-[14px] flex justify-start px-[15px] pt-3 gap-5 absolute z-10  -left-44 group-hover:left-0 transition-all duration-500">
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
                </div>
                <div className="flex justify-center items-center w-[270px] h-[236px] relative">
                  <div className="flex justify-center items-center w-[270px] h-[236px]">
                    <Carousel images={imageProduct3} width={130} height={130} />
                  </div>
                </div>

                <div className="pt-[15px] group-hover:bg-[#2F1AC4] h-full transition-all duration-300 ease-in-out">
                  <h2 className="text-[#FB2E86] text-[18px] font-bold text-center  group-hover:text-[#ffffff] pb-3">Cantilever chair</h2>

                  <h3 className="text-[#151875] text-[14px] font-medium text-center pb-3 group-hover:text-[#ffffff]">Code - Y523201</h3>
                  <h3 className="text-[#151875] text-[14px] text-center group-hover:text-[#ffffff]">$42.00</h3>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[185px] opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out">
                <Link href={"/"} className="py-[7px] px-[11px] text-white bg-[#08D15F] rounded-sm font-medium hover:bg-[#0b803a]">
                  View Details
                </Link>
              </div>
            </div>
            <div className="w-[270px] h-[361px] shadow-md rounded overflow-hidden relative group flex justify-center">
              <div className="bg-[#F6F7FB] w-[270px] h-[236px] relative  z-20">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div className="text-[#1389FF] text-[14px] flex justify-start px-[15px] pt-3 gap-5 absolute z-10 -left-44 group-hover:left-0 transition-all duration-500">
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
                </div>
                <div className="flex justify-center items-center w-[270px] h-[236px] relative">
                  {/* <Image width={178} height={178} src={"/img/image 1168.png"} /> */}
                  <div className="flex justify-center items-center w-[270px] h-[236px]">
                    <Carousel images={imageProduct4} width={130} height={130} />
                  </div>
                </div>

                <div className="pt-[15px] group-hover:bg-[#2F1AC4] h-full transition-all duration-300 ease-in-out">
                  <h2 className="text-[#FB2E86] text-[18px] font-bold text-center  group-hover:text-[#ffffff] pb-3">Cantilever chair</h2>

                  <h3 className="text-[#151875] text-[14px] font-medium text-center pb-3 group-hover:text-[#ffffff]">Code - Y523201</h3>
                  <h3 className="text-[#151875] text-[14px] text-center group-hover:text-[#ffffff]">$42.00</h3>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[185px] opacity-0 group-hover:opacity-100 z-50 transition-all duration-300 ease-in-out">
                <Link href={"/"} className="py-[7px] px-[11px] text-white bg-[#08D15F] rounded-sm font-medium hover:bg-[#0b803a]">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestProducts />
      <Offer />
      <TrendProduct />
      <DiscountItem />
      <TopCategories />
      <Subs />
      <section className="py-[96px]">
        <div className="flex justify-center">
          <div
            className="w-[904px] h-[93px]"
            style={{
              backgroundImage: "url('/img/image 1174.png')",
            }}
          ></div>
        </div>
      </section>
      <LeatestBlog />
    </>
  );
}
