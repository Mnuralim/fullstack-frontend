import React from "react";
import Image from "next/image";

const TrendProduct = () => {
  return (
    <>
      <section className="pt-[133px]">
        <div className="w-full h-[579px] bg-[#F1F0FF] flex justify-center">
          <div className="w-[1055px] h-[579px] flex items-center">
            <div className="flex items-center relative">
              <div className="z-20">
                <Image src={"/img/trend-product.png"} width={509} height={550} alt="trend" />
              </div>
              <div className="absolute z-10">
                <svg width="481" height="450" viewBox="0 0 481 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z" fill="#F5E1FC" />
                </svg>
              </div>
            </div>
            <div className="flex items-start max-w-[507px] flex-col">
              <div className="pb-[29px]">
                <h2 className="text-[#151875] text-[35px] font-semibold">Unique Features Of leatest & Trending Poducts</h2>
              </div>
              <div className="flex items-center ">
                <table>
                  <tbody>
                    <tr>
                      <td className="pr-3">
                        <p className="w-[11px] h-[11px] rounded-full bg-[#F52B70]"></p>
                      </td>
                      <td>
                        <p className="text-[#ACABC3] text-base font-medium leading-[21px]">All frames constructed with hardwood solids and laminates</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-3">
                        <p className="w-[11px] h-[11px] rounded-full bg-[#2B2BF5]"></p>
                      </td>
                      <td>
                        <p className="text-[#ACABC3] text-base font-medium leading-[28px] pt-[14px] pb-[14px]">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-3">
                        <p className="w-[11px] h-[11px] rounded-full bg-[#2BF5CC]"></p>
                      </td>
                      <td>
                        <p className="text-[#ACABC3] text-base font-medium">Arms, backs and seats are structurally reinforced</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex pt-[38px] gap-[19px]">
                <div>
                  <form action="">
                    <button type="submit" className="py-[14px] px-[24px] text-white bg-[#FB2E86] font-medium rounded-[3px] hover:bg-purple  transition duration-300 tracking-[0.02em] text-[17px]">
                      Add To Cart
                    </button>
                  </form>
                </div>
                <div className="flex items-start flex-col justify-center text-[#151875] text-[14px] tracking-[2%]">
                  <p>B&B Italian Sofa </p>
                  <p>$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendProduct;
