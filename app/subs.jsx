import React from "react";
import "./style.css";

const Subs = () => {
  return (
    <>
      <section className="pt-[178px]">
        <div
          className="bg-cover bg-center w-full h-[462px] flex justify-center text-center"
          style={{
            backgroundImage: "url('./img/Rectangle 102.png')",
          }}
        >
          <div className="max-w-[574px] pt-[174px]">
            <div className="pb-[28px]">
              <h2 className="text-[35px] text-[#151875] tracking-[0.015em] font-semibold">Get Leatest Update By Subscribe 0ur Newslater</h2>
            </div>
            <div>
              <button type="submit" className="py-[16px] px-[34px] text-white bg-[#FB2E86] font-medium rounded-[3px] hover:bg-purple  transition duration-300 tracking-[0.02em] text-[17px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subs;
