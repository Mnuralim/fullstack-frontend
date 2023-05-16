"use client";
import React from "react";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { Rating } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Link from "next/link";
import UpdateProduct from "./updateProduct";
import DeleteProduct from "./deleteProduct";
import AddImages from "./addImages";

const MyProducts = () => {
  const [search, setSeacrh] = useState("");
  const [sortValue, setSortValue] = useState("title-asc");
  const [limitPage, setLimitPage] = useState("25");

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };

  const handleLimitPage = (e) => {
    setLimitPage(e.target.value);
  };

  const fetcher = async (url) => {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    return data;
  };

  const { data, err } = useSWR("http://localhost:5000/api/products", fetcher);

  if (!data) return <div>loading...</div>;
  if (err) return <div>eror</div>;

  const filterProduct = data.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
  if (sortValue === "title-asc") {
    filterProduct.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "title-desc") {
    filterProduct.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortValue === "price-lowest") {
    filterProduct.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-highest") {
    filterProduct.sort((a, b) => b.price - a.price);
  }

  if (limitPage === "25") {
    filterProduct.slice(0, 25);
  } else if (limitPage === "50") {
    filterProduct.slice(0, 50);
  } else if (limitPage === "100") {
    filterProduct.slice(0, 100);
  } else if (limitPage === "500") {
    filterProduct.slice(0, 500);
  }

  return (
    <>
      <section className="pt-[146px]">
        <div className="bg-[#F6F5FF] w-full h-[286px]">
          <div className="flex items-center h-full px-[150px]">
            <div>
              <h1 className="text-[#101750] text-[36px] font-semibold">My Product</h1>
              <p className="text-base text-[#FB2E86] pt-[9px]">Update,Delete Your Product</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[124px]">
        <div className="px-[150px] pb-7 ">
          <Link href={"/main/admin/add"} className="py-[7px] text-white  px-[10px] rounded-md bg-blue-600 hover:bg-opacity-80">
            Add New Product
          </Link>
        </div>
        <div className="flex px-[150px] justify-between items-center">
          <div>
            <div>
              <h2 className="text-[#151875] text-[22px] font-semibold">Ecommerce Acceories & Fashion item </h2>
              <p className="text-[#8A8FB9] text-xs pt-2">About {filterProduct.length} results (0.62 seconds)</p>
            </div>
          </div>
          <div className="flex justify-between gap-[25px] items-center">
            <div className="flex items-center gap-2">
              <div className="text-[#3F509E] text-base">Per Page:</div>
              <div className="w-[55px] h-[25px] ">
                <div>
                  <select name="limit" id="limit" className="outline-none  border  text-slate-500 text-sm  px-[6px] py-[2px]" onChange={handleLimitPage}>
                    <option value="25">25</option>
                    <option value="#" disabled></option>
                    <option value="50">50</option>
                    <option value="#" disabled></option>
                    <option value="100">100</option>
                    <option value="#" disabled></option>
                    <option value="500">500</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="text-[#3F509E] text-base">Sort By:</div>
              <div>
                {/* <SelectPlaceholder onChange={handleSelectedValue} /> */}
                <div>
                  <select name="sort" id="sort" className="outline-none  border  text-slate-500 text-sm  px-[6px] py-[2px]" onChange={handleSortChange}>
                    <option value="title-asc">Title(a-z)</option>
                    <option value="#" disabled></option>
                    <option value="title-desc">Title(z-a)</option>
                    <option value="#" disabled></option>
                    <option value="price-lowest">Price(lowest)</option>
                    <option value="#" disabled></option>
                    <option value="price-highest">Price(highest)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[#3F509E] text-base">View:</div>
              <button>
                <FormatListBulletedIcon className="w-3 h-3 text-[#151875]" />
              </button>
            </div>
            <div>
              <input type="text" value={search} onChange={(e) => setSeacrh(e.target.value)} className="w-[162px] h-[30px] border outline-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-[150px] pt-[100px] min-h-screen">
        <div className="flex justify-center ">
          <div className="flex flex-col w-full gap-8 ">
            {filterProduct.map((product) => (
              <div key={product._id} className="w-full  h-[254px] flex items-center  relative gap-[30px] ">
                <div className="flex items-center justify-center ">
                  <Image src={product.thumbnail} width={203} height={203} className="rounded-md" alt={product.title} />
                </div>
                <div>
                  <div className="flex gap-[18px]">
                    <h2 className="text-[20px] text-[#111C85] font-semibold">{product.title}</h2>
                    <div className="absolute transform -translate-x-1/2 left-1/2 ">
                      <span className="w-3 h-3 rounded-full bg-[#DE9034] inline-block mr-[5px]"></span>
                      <span className="w-3 h-3 rounded-full bg-[#E60584] inline-block mr-[5px]"></span>
                      <span className="w-3 h-3 rounded-full bg-[#5E37FF] inline-block"></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px] pt-[14px] pb-[11px]">
                    <p className="text-[#111C85] text-[15px]">${product.price}</p>
                    <p>
                      <del className="text-[#FF2AAA] text-[15px]">${product.price}</del>
                    </p>
                    <div>
                      <Rating name="read-only" readOnly value={product.totalrating} size="small" />
                    </div>
                  </div>
                  <p className="w-[590px] text-[#9295AA] font-normal text-[18px] leading-[31px] pb-[31px]">{product.description}</p>
                  <div className="flex items-center gap-[34px] ">
                    <div>
                      <AddImages product={product} />
                    </div>
                    <div className="">
                      <UpdateProduct product={product} />
                    </div>
                    <div>
                      <DeleteProduct product={product} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default MyProducts;
