import React from "react";

const Contact = () => {
  return (
    <>
      <section className="pt-[146px]">
        <div className="bg-[#F6F5FF] w-full h-[286px]">
          <div className="flex items-center h-full px-[150px]">
            <div>
              <h1 className="text-[#101750] text-[36px] font-semibold">Contact</h1>
              <p className="text-base text-[#FB2E86] pt-[9px]">Fell Free To Contact Us</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[120px]">
        <div className="px-[150px]">
          <div className="grid grid-cols-2 gap-[100px]">
            <div>
              <h1 className="text-[#151875] text-[36px] font-semibold leading-[48px]">Information About us</h1>
              <p className="text-base text-[#8A8FB9] leading-[25px] pt-[13px] pb-[50px] font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum
                quam.
              </p>
              <div className="flex gap-[14px]">
                <div className="rounded-full w-[25px] h-[25px] bg-[#5625DF]"></div>
                <div className="rounded-full w-[25px] h-[25px] bg-[#FF27B7]"></div>
                <div className="rounded-full w-[25px] h-[25px] bg-[#37DAF3]"></div>
              </div>
            </div>
            <div>
              <h1 className="text-[#151875] text-[36px] font-semibold leading-[48px] pb-[26px]">Contact Way</h1>
              <div className="grid grid-cols-2 gap-x-[37px] gap-y-[49px]">
                <div className="flex gap-[15px]">
                  <div className="w-[45px] h-[45px] bg-[#5726DF] rounded-full"></div>
                  <div>
                    <p className="text-base text-[#8A8FB9] font-semibold leading-[25px]">Tel: +6283116</p>
                    <p className="text-base text-[#8A8FB9] font-semibold leading-[25px]">shadownur345@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-[15px]">
                  <div className="w-[45px] h-[45px] bg-[#FB2E86] rounded-full"></div>
                  <div>
                    <p className="text-base text-[#8A8FB9] font-semibold leading-[25px]">Support Forum</p>
                    <p className="text-base text-[#8A8FB9] font-semibold leading-[25px]">For over 24hr</p>
                  </div>
                </div>
                <div className="flex gap-[15px]">
                  <div className="w-[45px] h-[45px] bg-[#FFB265] rounded-full"></div>
                  <div>
                    <p className="text-base text-[#8A8FB9] font-semibold leading-[25px]">20 Margaret st, London</p>
                    <p className="text-base text-[#8A8FB9] font-semibold leading-[25px]">Great britain, 3NM98-LK</p>
                  </div>
                </div>
                <div className="flex gap-[15px]">
                  <div className="w-[45px] h-[45px] bg-[#1BE982] rounded-full"></div>
                  <div>
                    <p className="text-base text-[#8A8FB9] font-semibold leading-[25px]">Free standard shipping</p>
                    <p className="text-base text-[#8A8FB9] font-semibold leading-[25px]">on all orders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-[176px]">
            <div>
              <h1 className="text-[#151875] text-[36px] font-semibold leading-[48px]">Get In Touch</h1>
              <p className="text-base text-[#8A8FB9] leading-[25px] pt-[13px] pb-[50px] font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
              <div>
                <form>
                  <div className="flex flex-row gap-6">
                    <div className="w-full">
                      <input type="text" placeholder="Your Name*" className="w-full  border-[#A4B6C8B2] border-2 outline-none p-[11px] rounded" />
                    </div>
                    <div className="w-full">
                      <input type="email" placeholder="Your Email" className="w-full border-[#A4B6C8B2] border-2 outline-none p-[11px] rounded" />
                    </div>
                  </div>
                  <div className="w-full pt-[34px] pb-[47px]">
                    <input type="text" placeholder="Subject*" className="w-full  border-[#A4B6C8B2] border-2 outline-none p-[11px] rounded" />
                  </div>
                  <div className="w-full pt-[34px] pb-[47px]">
                    <textarea placeholder="Type Your Messege*" name="" id="" rows="5" className="w-full outline-none border-[#A4B6C8B2] border-2 rounded px-[11px] pt-[17px]"></textarea>
                  </div>
                  <div>
                    <button className="text-white bg-[#FB2E86] px-[41px] py-[9px] rounded hover:bg-purple transition duration-300">Send Email</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-[723px] h-[692px]" style={{ backgroundImage: "url('/img/Group 124.png')" }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
