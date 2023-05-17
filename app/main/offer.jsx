import React from "react";
import Image from "next/image";

const Offer = () => {
  return (
    <>
      <section className="pt-[58px]">
        <div className="text-center">
          <h1 className="text-[42px] font-semibold text-[#151875]">What Shopex Offer!</h1>
        </div>
        <div className="flex justify-center pt-[55px] gap-7">
          <div className="w-[270px] h-[320px] border-[#fff] border-b-2 shadow-2xl shadow-slate-400 flex flex-col justify-center  items-center px-[26px] hover:border-[#FF9100] hover:border-b-2 transition-all ease-in-out duration-300">
            <div className="pb-[27px]">
              <Image src={"/img/free-delivery 1.png"} width={65} height={65} alt="offer" />
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

export default Offer;
