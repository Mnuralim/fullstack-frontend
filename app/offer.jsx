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
          <div className="w-[270px] h-[320px] shadow-md flex flex-col justify-center  items-center px-[26px]">
            <div className="pb-[27px]">
              <Image src={"/img/free-delivery 1.png"} width={65} height={65} />
            </div>
            <div className="pb-5">
              <p className="text-[#151875] text-[22px]">24/7 Support</p>
            </div>
            <div>
              <p className="text-[#1A0B5B4D] font-bold text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
          <div className="w-[270px] h-[320px] shadow-lg flex flex-col justify-center  items-center px-[26px]">
            <div className="pb-[27px]">
              <Image src={"/img/cashback 1.png"} width={65} height={65} alt="offer" />
            </div>
            <div className="pb-5">
              <p className="text-[#151875] text-[22px]">24/7 Support</p>
            </div>
            <div>
              <p className="text-[#1A0B5B4D] font-bold text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
          <div className="w-[270px] h-[320px] shadow-lg flex flex-col justify-center  items-center px-[26px]">
            <div className="pb-[27px]">
              <Image src={"/img/premium-quality 1.png"} width={65} height={65} alt="offer" />
            </div>
            <div className="pb-5">
              <p className="text-[#151875] text-[22px]">24/7 Support</p>
            </div>
            <div>
              <p className="text-[#1A0B5B4D] font-bold text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
          <div className="w-[270px] h-[320px] shadow-lg flex flex-col justify-center  items-center px-[26px]">
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
