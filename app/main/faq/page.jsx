import React from "react";

const Faq = () => {
  return (
    <>
      <section className="pt-[146px]">
        <div className="bg-[#F6F5FF] w-full h-[286px]">
          <div className="flex items-center h-full px-[150px]">
            <div>
              <h1 className="text-[#101750] text-[36px] font-semibold">FAQ</h1>
              <p className="text-base text-[#FB2E86] pt-[9px]">Frequently Asked Questions</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[134px]">
        <div className="px-[150px]">
          <div className="grid grid-cols-2">
            <div className="max-w-[500px]">
              <h1 className="text-[#1D3178] text-[36px] font-semibold pb-[64px]">Generel Information</h1>
              <div className="pb-[66px]">
                <h2 className="text-[17px] text-[#1D3178] font-semibold pb-[15px]">Eu dictumst cum at sed euismood condimentum?</h2>
                <p className="text-base text-[#A1ABCC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
              </div>
              <div className="pb-[66px]">
                <h2 className="text-[17px] text-[#1D3178] font-semibold pb-[15px]">Magna bibendum est fermentum eros.</h2>
                <p className="text-base text-[#A1ABCC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
              </div>
              <div className="pb-[66px]">
                <h2 className="text-[17px] text-[#1D3178] font-semibold pb-[15px]">Odio muskana hak eris conseekin sceleton?</h2>
                <p className="text-base text-[#A1ABCC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
              </div>
              <div>
                <h2 className="text-[17px] text-[#1D3178] font-semibold pb-[15px]">Elit id blandit sabara boi velit gua mara?</h2>
                <p className="text-base text-[#A1ABCC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
              </div>
            </div>
            <div className="bg-[#F8F8FD]">
              <div className="px-[42px] pt-[66px]">
                <h2 className="text-[#1D3178] text-[24px] font-semibold pb-[114px]">Ask a Question</h2>
                <div>
                  <form>
                    <div className="w-full pt-[34px] pb-[35px]">
                      <input type="text" placeholder="Your Name*" className="w-full  border-[#A4B6C8B2] border-2 outline-none p-[11px] rounded" />
                    </div>
                    <div className="w-full  pb-[35px]">
                      <input type="text" placeholder="Subject*" className="w-full  border-[#A4B6C8B2] border-2 outline-none p-[11px] rounded" />
                    </div>
                    <div className="w-full  pb-[35px]">
                      <textarea placeholder="Type Your Messege*" name="" id="" rows="5" className="w-full outline-none border-[#A4B6C8B2] border-2 rounded px-[11px] pt-[17px]"></textarea>
                    </div>
                    <div>
                      <button className="text-white bg-[#FB2E86] px-[41px] py-[9px] rounded hover:bg-purple transition duration-300">Send Mail</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[83px] pb-[21px]">
        <div className="flex justify-center">
          <div
            className="w-[904px] h-[93px]"
            style={{
              backgroundImage: "url('/img/image 1174.png')",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Faq;
