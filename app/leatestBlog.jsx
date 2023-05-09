import React from "react";
import Image from "next/image";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Link from "next/link";

const LeatestBlog = () => {
  return (
    <>
      <section className="mb-[53px]">
        <div className="pb-[80px]">
          <h1 className="text-[#1A0B5B] text-[42px] font-semibold text-center ">Leatest Blog</h1>
        </div>
        <div className="flex justify-center gap-14">
          <div className="w-[370px] h-[493px] shadow-md group">
            <Image src={"/img/blog1.png"} width={370} height={255} className="rounded-md" />
            <div className="pl-[19px] ">
              <div className="flex gap-[29px] pt-[19px] pb-[31px]">
                <div className="flex items-center gap-2">
                  <div>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.02667 0L11.3333 3.31333L10.38 4.25333L7.08 0.953333L8.02667 0ZM0 10.8533L4.33333 6.54C4.26667 6.33333 4.31333 6.07333 4.48667 5.9C4.74667 5.64 5.17333 5.64 5.43333 5.9C5.69333 6.16667 5.69333 6.58667 5.43333 6.84667C5.26 7.02 5 7.06667 4.79333 7L0.48 11.3333L7.55333 8.96667L9.90667 4.72667L6.61333 1.42667L2.36667 3.78L0 10.8533Z"
                        fill="#FB2E86"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#151875]">SaberAli</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <CalendarMonthOutlinedIcon className="text-[#FFA454] w-[11px] h-[11px]" />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#151875]">21 August,2022</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px]">
                <h2 className="text-[#151875] text-[18px] font-semibold group-hover:text-[#FB2E86]">Top esssential Trends in 2023</h2>
                <p className="text-base text-[#72718F] leading-[30px] pt-[17px]">More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <Link className="text-base text-[#151875] underline pt-[14px] leading-[30px] group-hover:text-[#FB2E86]" href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[370px] h-[493px] shadow-md group">
            <Image src={"/img/Frame 4.png"} width={370} height={255} className="rounded-md" />
            <div className="pl-[19px] ">
              <div className="flex gap-[29px] pt-[19px] pb-[31px]">
                <div className="flex items-center gap-2">
                  <div>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.02667 0L11.3333 3.31333L10.38 4.25333L7.08 0.953333L8.02667 0ZM0 10.8533L4.33333 6.54C4.26667 6.33333 4.31333 6.07333 4.48667 5.9C4.74667 5.64 5.17333 5.64 5.43333 5.9C5.69333 6.16667 5.69333 6.58667 5.43333 6.84667C5.26 7.02 5 7.06667 4.79333 7L0.48 11.3333L7.55333 8.96667L9.90667 4.72667L6.61333 1.42667L2.36667 3.78L0 10.8533Z"
                        fill="#FB2E86"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#151875]">SaberAli</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <CalendarMonthOutlinedIcon className="text-[#FFA454] w-[11px] h-[11px]" />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#151875]">21 August,2022</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px]">
                <h2 className="text-[#151875] text-[18px] font-semibold group-hover:text-[#FB2E86]">Top esssential Trends in 2023</h2>
                <p className="text-base text-[#72718F] leading-[30px] pt-[17px]">More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <Link className="text-base text-[#151875] underline pt-[14px] leading-[30px] group-hover:text-[#FB2E86]" href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[370px] h-[493px] shadow-md group">
            <Image src={"/img/Frame 3.png"} width={370} height={255} className="rounded-md" />
            <div className="pl-[19px] ">
              <div className="flex gap-[29px] pt-[19px] pb-[31px]">
                <div className="flex items-center gap-2">
                  <div>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.02667 0L11.3333 3.31333L10.38 4.25333L7.08 0.953333L8.02667 0ZM0 10.8533L4.33333 6.54C4.26667 6.33333 4.31333 6.07333 4.48667 5.9C4.74667 5.64 5.17333 5.64 5.43333 5.9C5.69333 6.16667 5.69333 6.58667 5.43333 6.84667C5.26 7.02 5 7.06667 4.79333 7L0.48 11.3333L7.55333 8.96667L9.90667 4.72667L6.61333 1.42667L2.36667 3.78L0 10.8533Z"
                        fill="#FB2E86"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#151875]">SaberAli</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <CalendarMonthOutlinedIcon className="text-[#FFA454] w-[11px] h-[11px]" />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#151875]">21 August,2022</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px]">
                <h2 className="text-[#151875] text-[18px] font-semibold group-hover:text-[#FB2E86]">Top esssential Trends in 2023</h2>
                <p className="text-base text-[#72718F] leading-[30px] pt-[17px]">More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <Link className="text-base text-[#151875] underline pt-[14px] leading-[30px] group-hover:text-[#FB2E86]" href={"/"}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeatestBlog;
