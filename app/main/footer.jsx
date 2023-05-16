import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex w-full  items-center bg-[#EEEFFB] h-[479px] px-[138px] ">
          <div className="flex justify-between w-full">
            <div>
              <h1 className="text-[38px] text-[#000000] font-bold pb-[31px]">Alimn</h1>
              <div className="pb-[25px]">
                <form action="">
                  <input type="text" placeholder="Enter Email Address" className="py-[11px] px-5 placeholder:text-[#8A8FB9] outline-none rounded-[3px]" />
                  <button type="submit" className="py-[11px] px-10 text-white bg-[#FB2E86] font-medium rounded-[3px] hover:bg-purple  transition duration-300">
                    Sign Up
                  </button>
                </form>
              </div>
              <p className="text-[#8A8FB9] text-base pb-[10px]">Contact Info</p>
              <p className="text-[#8A8FB9] text-base">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div>
              <h1 className="pb-[42px] text-[#000000] text-[22px] font-semibold">Categories</h1>
              <div>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Laptops & Computers</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Cameras & Photography</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Smart Phones & Tablets</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Video Games & Consoles</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Waterproof Headphones</p>
              </div>
            </div>
            <div>
              <h1 className="pb-[42px] text-[#000000] text-[22px] font-semibold">Customer Care</h1>
              <div>
                <p className="text-[#8A8FB9] text-base pb-[21px]">My Account</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Discount</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Returns</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Orders History</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Order Tracking</p>
              </div>
            </div>
            <div>
              <h1 className="pb-[42px] text-[#000000] text-[22px] font-semibold">Pages</h1>
              <div>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Blog</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Browse the Shop</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Category</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Pre-Built Pages</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">Visual Composer Elements</p>
                <p className="text-[#8A8FB9] text-base pb-[21px]">WooCommerce Pages</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
