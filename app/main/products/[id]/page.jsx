"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import useSWR from "swr";
import Review from "./review";

// const getSingleProduct = async (id) => {
//   const res = await fetch(`http://localhost:5000/api/products/${id}`);
//   return res.json();
// };

const SingleProductPage = ({ params }) => {
  // const data = await getSingleProduct(params.id);

  const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  const url = `${process.env.API_URL}/api/products/${params.id}`;
  const { data, err } = useSWR(url, fetcher);

  if (!data) return <div>loading...</div>;
  if (err) return <div>eror</div>;

  return (
    <>
      <section className="pt-[146px] pb-[121px]">
        <div className="bg-[#F6F5FF] w-full h-[286px]">
          <div className="flex items-center h-full px-[150px]">
            <div>
              <h1 className="text-[#101750] text-[36px] font-semibold">Product Details</h1>
              <p className="text-base pt-[9px]">Everything You Need is Here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[150px]">
        <div className="w-full h-[509px] shadow-xl flex items-center">
          <div className="p-[13px] w-1/2 flex gap-[21px]">
            <div className="grid grid-cols-1 gap-y-[11px]">
              {data.images.map((image) => (
                <div key={image}>
                  <Image src={image} width={151} height={155} className="rounded" alt={data.title} />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center w-[375px] h-[487px] rounded">
              {/* <img src={data.thumbnail} className="w-full h-full rounded" /> */}
              <Image src={data.thumbnail} alt="thumbnail" className="w-full h-full rounded " width={375} height={485} />
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/2 h-full ">
            <h2 className="text-[#0D134E] text-[36px] font-semibold pb-[13px]">{data.title}</h2>
            <div>
              <Rating value={data.totalrating} readOnly size="small" />
            </div>
            <div className="flex gap-[18px] pt-[14px] pb-10">
              <p className="text-[#151875] text-base leading-[29px]">${data.price - data.price * (10 / 100)}</p>
              <p>
                <del className="text-[#FB2E86] text-base leading-[29px]">${data.price}</del>
              </p>
            </div>
            <div>
              <p className="text-[#0D134E]">{data.color}</p>
            </div>
            <p className="text-base text-[#A9ACC6] leading-[29px] max-w-[540px] pt-3 pb-[34px] font-semibold">{data.description}</p>
            <div className="flex gap-5 pl-[70px] pb-[17px]">
              <div>
                <button className="text-[#151875]">Add To Cart</button>
              </div>
              <div>
                <FavoriteBorderOutlinedIcon className="text-[#535399] w-[17px] h-[17px]" />
              </div>
            </div>
            <p className="text-[#151875] font-semibold text-base leading-[29px] pb-[10px]">
              Categories: <span className="capitalize text-[#FB2E86]">{data.category}</span>
            </p>
            <p className="text-[#151875] font-semibold text-base leading-[29px] pb-[10px]">Tags</p>
            <div className="flex gap-4">
              <p className="text-[#151875] font-semibold text-base leading-[29px] ">Share</p>
              <div className="flex gap-[10px] items-center">
                <div>
                  <FacebookOutlinedIcon className="w-[18px] h-[18px] text-[#151875]" />
                </div>
                <div>
                  <svg width="17" height="17" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#FB2E86" />
                    <path
                      d="M8.62291 4.57764C8.61968 4.33528 8.57431 4.09533 8.48883 3.86852C8.4147 3.67721 8.30148 3.50347 8.1564 3.35839C8.01132 3.21331 7.83758 3.10009 7.64627 3.02596C7.42237 2.94192 7.18584 2.89647 6.94675 2.89156C6.63891 2.8778 6.54131 2.87396 5.75987 2.87396C4.97843 2.87396 4.87827 2.87396 4.57267 2.89156C4.33368 2.89651 4.09726 2.94195 3.87347 3.02596C3.68212 3.10004 3.50835 3.21324 3.36327 3.35832C3.21818 3.50341 3.10498 3.67718 3.03091 3.86852C2.94669 4.09224 2.90135 4.32872 2.89683 4.56772C2.88307 4.87588 2.87891 4.97348 2.87891 5.75492C2.87891 6.53636 2.87891 6.6362 2.89683 6.94212C2.90163 7.18148 2.94675 7.41764 3.03091 7.64196C3.10511 7.83325 3.21839 8.00695 3.36353 8.15197C3.50866 8.29699 3.68245 8.41015 3.87379 8.4842C4.09696 8.57163 4.33343 8.62032 4.57299 8.6282C4.88115 8.64196 4.97875 8.64612 5.76019 8.64612C6.54163 8.64612 6.64179 8.64612 6.94739 8.6282C7.18647 8.62349 7.42302 8.57815 7.64691 8.49412C7.83817 8.41991 8.01187 8.30666 8.15693 8.16159C8.302 8.01652 8.41525 7.84282 8.48947 7.65156C8.57363 7.42756 8.61874 7.1914 8.62354 6.95172C8.6373 6.64388 8.64146 6.54628 8.64146 5.76452C8.64082 4.98308 8.64083 4.88388 8.62291 4.57764V4.57764ZM5.75795 7.23268C4.94067 7.23268 4.27859 6.5706 4.27859 5.75332C4.27859 4.93604 4.94067 4.27396 5.75795 4.27396C6.1503 4.27396 6.52658 4.42982 6.80401 4.70726C7.08144 4.98469 7.23731 5.36097 7.23731 5.75332C7.23731 6.14567 7.08144 6.52195 6.80401 6.79939C6.52658 7.07682 6.1503 7.23268 5.75795 7.23268V7.23268ZM7.29619 4.5642C7.10515 4.5642 6.95123 4.40996 6.95123 4.21924C6.95123 4.17396 6.96014 4.12913 6.97747 4.08729C6.9948 4.04546 7.0202 4.00745 7.05222 3.97543C7.08423 3.94341 7.12224 3.91802 7.16408 3.90069C7.20591 3.88336 7.25075 3.87444 7.29603 3.87444C7.34131 3.87444 7.38614 3.88336 7.42797 3.90069C7.46981 3.91802 7.50782 3.94341 7.53984 3.97543C7.57185 4.00745 7.59725 4.04546 7.61458 4.08729C7.63191 4.12913 7.64083 4.17396 7.64083 4.21924C7.64083 4.40996 7.48659 4.5642 7.29619 4.5642Z"
                      fill="white"
                    />
                    <path
                      d="M5.75784 6.71416C6.28856 6.71416 6.7188 6.28392 6.7188 5.7532C6.7188 5.22247 6.28856 4.79224 5.75784 4.79224C5.22711 4.79224 4.79688 5.22247 4.79688 5.7532C4.79688 6.28392 5.22711 6.71416 5.75784 6.71416Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg width="17" height="17" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#151875" />
                    <g clipPath="url(#clip0_108_8634)">
                      <path
                        d="M9.48565 3.49972C9.21845 3.61812 8.93141 3.69812 8.62965 3.73428C8.94101 3.54797 9.17395 3.25475 9.28501 2.90932C8.99248 3.08307 8.67232 3.20538 8.33845 3.27092C8.11393 3.03119 7.81655 2.8723 7.49247 2.81891C7.1684 2.76552 6.83576 2.82061 6.5462 2.97564C6.25665 3.13067 6.02637 3.37695 5.89114 3.67626C5.7559 3.97557 5.72326 4.31116 5.79829 4.63092C5.20555 4.60116 4.62569 4.44709 4.09634 4.17873C3.567 3.91036 3.1 3.53369 2.72565 3.07316C2.59765 3.29396 2.52405 3.54996 2.52405 3.8226C2.5239 4.06804 2.58435 4.30972 2.70001 4.52619C2.81567 4.74267 2.98298 4.92725 3.18709 5.06356C2.95037 5.05603 2.71889 4.99206 2.51189 4.877V4.8962C2.51186 5.24043 2.63094 5.57408 2.84891 5.84052C3.06687 6.10695 3.37031 6.28977 3.70773 6.35796C3.48814 6.41739 3.25791 6.42614 3.03445 6.38356C3.12965 6.67975 3.31509 6.93877 3.5648 7.12433C3.81452 7.3099 4.11602 7.41273 4.42709 7.41844C3.89903 7.83297 3.24689 8.05783 2.57557 8.05684C2.45665 8.05687 2.33783 8.04992 2.21973 8.03604C2.90116 8.47417 3.6944 8.7067 4.50453 8.7058C7.24693 8.7058 8.74613 6.43444 8.74613 4.46452C8.74613 4.40052 8.74453 4.33588 8.74165 4.27188C9.03326 4.06099 9.28498 3.79984 9.48501 3.50068L9.48565 3.49972Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_8634">
                        <rect width="7.68" height="7.68" fill="white" transform="translate(1.91992 1.91998)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[131px]">
        <div className="w-full bg-[#F9F8FE] ">
          <div className="px-[150px] mb-16">
            <div className="w-full ">
              <Review />
            </div>
          </div>
        </div>
      </section>
      <section className="px-[150px] pt-[126px]">
        <div className="pb-[47px]">
          <h2 className="text-[#101750] text-[36px] font-semibold">Related Products</h2>
        </div>
        <div className="grid grid-cols-4">
          <div className=" w-[270px] h-[424px] rounded bg-[#F9F8FE]">
            <div>
              <Image src={"/img/Rectangle 131.png"} width={270} height={240} className="w-[270px] h-[340px] rounded" alt="product" />
            </div>
            <div className="px-1 py-[17px]">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base text-[#151875]">Top Wall Digital Clock</h3>
                </div>
                <div>
                  <Rating value={3} readOnly size="small" />
                </div>
              </div>
              <div>
                <p className="text-[#151875] text-[13px] pt-[15px]">$43</p>
              </div>
            </div>
          </div>
          <div className=" w-[270px] h-[424px] rounded bg-[#F9F8FE]">
            <div>
              <Image src={"/img/Rectangle 131.png"} width={270} height={240} className="w-[270px] h-[340px] rounded" alt="product" />
            </div>
            <div className="px-1 py-[17px]">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base text-[#151875]">Top Wall Digital Clock</h3>
                </div>
                <div>
                  <Rating value={3} readOnly size="small" />
                </div>
              </div>
              <div>
                <p className="text-[#151875] text-[13px] pt-[15px]">$43</p>
              </div>
            </div>
          </div>
          <div className=" w-[270px] h-[424px] rounded bg-[#F9F8FE]">
            <div>
              <Image src={"/img/Rectangle 131.png"} width={270} height={240} className="w-[270px] h-[340px] rounded" alt="product" />
            </div>
            <div className="px-1 py-[17px]">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base text-[#151875]">Top Wall Digital Clock</h3>
                </div>
                <div>
                  <Rating value={3} readOnly size="small" />
                </div>
              </div>
              <div>
                <p className="text-[#151875] text-[13px] pt-[15px]">$43</p>
              </div>
            </div>
          </div>
          <div className=" w-[270px] h-[424px] rounded bg-[#F9F8FE]">
            <div>
              <Image src={"/img/Rectangle 131.png"} width={270} height={240} className="w-[270px] h-[340px] rounded" alt="product" />
            </div>
            <div className="px-1 py-[17px]">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base text-[#151875]">Top Wall Digital Clock</h3>
                </div>
                <div>
                  <Rating value={3} readOnly size="small" />
                </div>
              </div>
              <div>
                <p className="text-[#151875] text-[13px] pt-[15px]">$43</p>
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

export default SingleProductPage;
