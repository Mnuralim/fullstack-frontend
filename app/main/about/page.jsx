import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="pt-[146px]">
        <div className="bg-[#F6F5FF] w-full h-[286px]">
          <div className="flex items-center h-full px-[150px]">
            <div>
              <h1 className="text-[#101750] text-[36px] font-semibold">About</h1>
              <p className="text-base text-[#FB2E86] pt-[9px]">About Us</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[119px]">
        <div className="px-[150px]">
          <div className="grid grid-cols-2 ">
            <div className="w-[552px] h-[409px] bg-[#2B3CAB] rounded relative ">
              <div style={{ backgroundImage: "url('/img/Rectangle 56.png')" }} className="w-[555px] h-[390px] absolute left-[15px]"></div>
            </div>
            <div className="max-w-[550px] pt-5">
              <h1 className="text-[36px] text-[#151875] font-semibold pb-[14px]">Know About Our Ecomerce Business, History</h1>
              <p className="text-base text-[#8A8FB9] font-semibold pb-[70px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum
                quam.
              </p>
              <div>
                <button className="text-white bg-[#FB2E86] px-[41px] py-[9px] rounded hover:bg-purple transition duration-300">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[141px]">
        <div className="text-center">
          <h1 className="text-[42px] font-semibold text-[#000]">Our Features</h1>
        </div>
        <div className="flex justify-center pt-[67px] gap-7">
          <div className="w-[270px] h-[320px] border-[#fff] border-b-2 shadow-2xl shadow-slate-400 flex flex-col justify-center  items-center px-[26px] hover:border-[#FF9100] hover:border-b-2 transition-all ease-in-out duration-300">
            <div className="pb-[27px]">
              <Image src={"/img/free-delivery 1.png"} width={65} height={65} />
            </div>
            <div className="pb-5">
              <p className="text-[#151875] text-[22px]">Free Deliveryt</p>
            </div>
            <div>
              <p className="text-[#1A0B5B4D] font-bold text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
          <div className="w-[270px] h-[320px] shadow-2xl shadow-slate-400 flex flex-col justify-center  items-center px-[26px] border-[#fff] border-b-2  hover:border-[#FF9100] hover:border-b-2 transition-all ease-in-out duration-300">
            <div className="pb-[27px]">
              <Image src={"/img/cashback 1.png"} width={65} height={65} alt="offer" />
            </div>
            <div className="pb-5">
              <p className="text-[#151875] text-[22px]">100% Cash Back</p>
            </div>
            <div>
              <p className="text-[#1A0B5B4D] font-bold text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
          <div className="w-[270px] h-[320px] shadow-2xl shadow-slate-400 flex flex-col justify-center  items-center px-[26px] border-[#fff] border-b-2 hover:border-[#FF9100] hover:border-b-2 transition-all ease-in-out duration-300">
            <div className="pb-[27px]">
              <Image src={"/img/premium-quality 1.png"} width={65} height={65} alt="offer" />
            </div>
            <div className="pb-5">
              <p className="text-[#151875] text-[22px]">Quality Product</p>
            </div>
            <div>
              <p className="text-[#1A0B5B4D] font-bold text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
          <div className="w-[270px] h-[320px] shadow-2xl shadow-slate-400 flex flex-col justify-center  items-center px-[26px] border-[#fff] border-b-2 hover:border-[#FF9100] hover:border-b-2 transition-all ease-in-out duration-300">
            <div className="pb-[27px]">
              <Image src={"/img/24-hours-support 1.png"} width={65} height={65} alt="offer" />
            </div>
            <div className="pb-5">
              <p className="text-[#151875] text-[22px]">24/7 Support</p>
            </div>
            <div>
              <p className="text-[#1A0B5B4D] font-bold text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
