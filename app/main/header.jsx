"use client";
import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <>
      <header className="z-[999] w-screen fixed">
        <div className="w-screen ">
          <div className="w-full bg-purple">
            <div className="flex justify-between items-center py-[13px] px-[150px]">
              <div className="flex justify-between gap-12">
                <div className="flex gap-[10px]">
                  <MailOutlineIcon className="text-[#F1F1F1]" />
                  <p className="text-[#F1F1F1] text-base font-semibold">shadownur345@gmail.com</p>
                </div>
                <div className="flex gap-[10px]">
                  <CallOutlinedIcon className="text-[#F1F1F1]" />
                  <h2 className="text-base font-semibold text-[#f1f1f1]">+6283116</h2>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-[17px]">
                  <div className="text-[#F1F1F1] text-base font-semibold">
                    English
                    <span>
                      <ExpandMoreIcon />
                    </span>
                  </div>
                  <div className="text-[#F1F1F1] text-base font-semibold">
                    USD
                    <span>
                      <ExpandMoreIcon />
                    </span>
                  </div>
                  <div className="text-[#F1F1F1] text-base font-semibold">
                    <button onClick={() => signOut()}>
                      Logout
                      <span>
                        <PersonIcon className="w-[17px]" />
                      </span>
                    </button>
                  </div>
                  <div className="text-[#F1F1F1] text-base font-semibold mr-[26px]">
                    Wishlist
                    <span className="pl-[3px]">
                      <FavoriteBorderIcon className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="text-[#F1F1F1]  font-semibold w-6 h-6 ">
                    <ShoppingCartOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="px-[150px] py-[22px] font-lato bg-[#ffffff] ">
            <div className="flex items-center justify-between ">
              <div>
                <h1 className="text-[#0D0E43] font-bold text-[34px]">Alimn</h1>
              </div>
              <div className="flex gap-[35px]">
                <Link href={"/main"}>
                  <div className="text-[#0D0E43] text-base font-normal hover:text-[#FB2E86] cursor-pointer">Home</div>
                </Link>
                <Link href={"/main/about"}>
                  <div className="text-[#0D0E43] text-base font-normal hover:text-[#FB2E86] cursor-pointer">About</div>
                </Link>
                <Link href={"/main/products"}>
                  <div className="text-[#0D0E43] text-base font-normal hover:text-[#FB2E86] cursor-pointer">Products</div>
                </Link>
                <div className="text-[#0D0E43] text-base font-normal hover:text-[#FB2E86] cursor-pointer">Blog</div>
                <Link href={"/main/faq"}>
                  <div className="text-[#0D0E43] text-base font-normal hover:text-[#FB2E86] cursor-pointer">Faq</div>
                </Link>
                <Link href={"/main/contact"}>
                  <div className="text-[#0D0E43] text-base font-normal hover:text-[#FB2E86] cursor-pointer">Contact</div>
                </Link>
                <Link href={"/main/admin/product"}>{isAdmin && <div className="text-[#0D0E43] text-base font-normal hover:text-[#FB2E86] cursor-pointer">My Product</div>}</Link>
              </div>
              <div>
                <form action="" className="flex items-center ">
                  <input type="text" placeholder="" className="px-[13px] py-2 max-h-[51px] border outline-none" />
                  <button className="text-white bg-[#FB2E86] px-[13px] py-2 max-h-[51px] hover:bg-purple  transition duration-300" type="submit">
                    <SearchIcon className="text-[24x]" />
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
