import React, { useEffect, useState, useRef } from "react";
import StarIcon from "@mui/icons-material/Star";
import Tooltip from "@mui/material/Tooltip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Image from "next/image";
import RemoveTwoToneIcon from "@mui/icons-material/RemoveTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Rating from "@mui/material/Rating";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Link from "next/link";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const FixedElement = () => {
  const [fixed, setFixed] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.pageYOffset;
      // console.log(scrollValue);
      if (scrollValue >= 1100 && scrollValue <= 3733) {
        setFixed(true);
      } else if (scrollValue >= 3733) {
        setFixed(false);
        setFixedTop(2700);
      } else {
        setFixed(false);
        setFixedTop(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={` ${fixed ? "fixed top-[158px] right-[150px]" : `absolute top-[${fixedTop}px] right-0`} `}>
      <div className="border border-slate-400 rounded-md w-[300px]">
        <div className="px-4">
          <h2 className="text-base font-semibold text-[#151875] pt-2">Set amount and notes</h2>
          <div className="flex items-center py-[14px]">
            <Image src="/img/image 1168.png" width={48} height={48} alt="product" />
            <p className="text-[1rem] text-[#212121]">Putih</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[102px] h-[30px] border border-slate-400 flex justify-between items-center rounded-md px-1">
              <button>
                <RemoveTwoToneIcon className="w-4 h-4 text-purple" />
              </button>
              <input type="text" value={2} disabled className="w-3" />
              <button>
                <AddTwoToneIcon className="w-4 h-4 text-purple" />
              </button>
            </div>
            <div>
              <p>
                <span>Stock: </span>
                <span>
                  <b>18</b>
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-between py-[14px]">
            <p className="text-[#6D7588] text-[1rem]">Subtotal</p>
            <p className="text-[18px] font-bold">$300</p>
          </div>
          <div>
            <div className="pb-[10px]">
              <button className="border border-purple w-full py-[6px] rounded-md bg-purple font-bold text-white hover:bg-[#FB2E86] hover:border-[#FB2E86] transition-colors duration-300 ease-in-out">Add To Cart</button>
            </div>
            <div>
              <button className="border border-purple w-full py-[6px] rounded-md text-purple font-bold hover:text-[#FB2E86] hover:border-[#FB2E86] transition-colors duration-300 ease-in-out">Buy</button>
            </div>
          </div>
          <div className="flex justify-between pt-[14px] pb-2">
            <button>
              <ChatOutlinedIcon className="pr-2" />
              <span className="text-xs">Chat</span>
            </button>
            <button className="border-r-2 border-l-2 px-3">
              <FavoriteBorderOutlinedIcon className="pr-2" />
              <span className="text-xs">Wishlist</span>
            </button>
            <button>
              <ShareOutlinedIcon className="pr-2" />
              <span className="text-xs">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  const [report, setReport] = useState(false);
  const [seeReply, setSeeReply] = useState(null);
  const [fixed, setFixed] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  useEffect(() => {
    console.log(div1Ref.current.getBoundingClientRect());
    console.log(div2Ref.current.getBoundingClientRect());

    const handleScroll = () => {
      const topDiv1 = div1Ref.current.getBoundingClientRect().top;
      const topDiv2 = div2Ref.current.getBoundingClientRect().top;
      const heightDiv1 = div1Ref.current.getBoundingClientRect().height;
      const heightDiv2 = div2Ref.current.getBoundingClientRect().height;
      const stopFixed1 = topDiv1 + heightDiv1 - 347;
      const stopFixed2 = topDiv2 + heightDiv2 - 347;
      // console.log({ topDiv1, heightDiv1 });
      // console.log({ topDiv2, heightDiv2 });
      const scrollValue = window.pageYOffset;
      // console.log(scrollValue);
      // if (scrollValue >= 1100 && scrollValue <= 3733) {
      //   setFixed(true);
      // } else if (scrollValue >= 3733) {
      //   setFixed(false);
      //   setFixedTop(2700);
      // } else {
      //   setFixed(false);
      //   setFixedTop(0);
      // }
      if (topDiv1 > 0) {
        setFixed(false);
      } else if (topDiv1 < 0) {
        setFixed(true);
      } else if (topDiv1 == stopFixed1) {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const value = 50;

  const datas = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    ,
    {
      id: 3,
    },
    ,
    {
      id: 4,
    },
    ,
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];

  return (
    <div className="flex justify-between ">
      <div ref={div2Ref} className="w-1/4 pt-[67px] relative">
        <div className={` ${fixed ? "fixed top-[158px] left-[150px]" : `absolute top-[${fixedTop}px] `} `}>
          <div>
            <h2 className="text-base text-[#151875] font-semibold  pb-[31px]">BUYER REVIEWS</h2>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center items-center gap-1 pb-[14px]">
                <div>
                  <StarIcon className="w-[30px] h-[30px] text-yellow-300" />
                </div>
                <div>
                  <h2>
                    <span className="text-[60px]">4.6</span>
                    <span className="text-base text-[#6D7588]">/5.0</span>
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-center pb-[14px]">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="font-bold text-[0.85rem] pt-[3px]">88% of buyers are satisfied</p>
                  </div>
                  <div className="cursor-pointer">
                    <Tooltip title="Calculated from the number of positive ratings (4 and 5 stars) divided by the total rating." arrow>
                      <ErrorOutlineIcon className="w-4 h-4" />
                    </Tooltip>
                  </div>
                </div>
                <p className="text-[0.85rem] text-[rgba(49,53,59,0.68)]">63 ratings • 26 reviews</p>
              </div>
              <div>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td className="pr-1">
                          <StarIcon className="w-4 h-4 text-yellow-300 pb-[3px]" />
                        </td>
                        <td className="pr-1">
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)] font-bold">5</div>
                        </td>
                        <td className="pr-1">
                          <div className="bg-slate-300 w-[235px] h-2  rounded-full">
                            <div style={{ width: `${value}%` }} className="rounded-full h-2 bg-purple"></div>
                          </div>
                        </td>
                        <td>
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)]">45</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-1">
                          <StarIcon className="w-4 h-4 text-yellow-300 pb-[3px]" />
                        </td>
                        <td className="pr-1">
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)] font-bold">4</div>
                        </td>
                        <td className="pr-1">
                          <div className="bg-slate-300 w-[235px] h-2  rounded-full">
                            <div style={{ width: `${value}%` }} className="rounded-full h-2 bg-purple"></div>
                          </div>
                        </td>
                        <td>
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)]">45</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-1">
                          <StarIcon className="w-4 h-4 text-yellow-300 pb-[3px]" />
                        </td>
                        <td className="pr-1">
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)] font-bold">3</div>
                        </td>
                        <td className="pr-1">
                          <div className="bg-slate-300 w-[235px] h-2  rounded-full">
                            <div style={{ width: `${value}%` }} className="rounded-full h-2 bg-purple"></div>
                          </div>
                        </td>
                        <td>
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)]">45</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-1">
                          <StarIcon className="w-4 h-4 text-yellow-300 pb-[3px]" />
                        </td>
                        <td className="pr-1">
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)] font-bold">2</div>
                        </td>
                        <td className="pr-1">
                          <div className="bg-slate-300 w-[235px] h-2  rounded-full">
                            <div style={{ width: `${value}%` }} className="rounded-full h-2 bg-purple"></div>
                          </div>
                        </td>
                        <td>
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)]">45</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="pr-1">
                          <StarIcon className="w-4 h-4 text-yellow-300 pb-[3px]" />
                        </td>
                        <td className="pr-1">
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)] font-bold">1</div>
                        </td>
                        <td className="pr-1">
                          <div className="bg-slate-300 w-[235px] h-2  rounded-full">
                            <div style={{ width: `${value}%` }} className="rounded-full h-2 bg-purple"></div>
                          </div>
                        </td>
                        <td>
                          <div className="text-[0.85rem] text-[rgba(49,53,59,0.68)]">45</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={div1Ref} className="w-2/4 ">
        <div className="px-4">
          <div>
            <h2 className="text-base text-[#151875] font-semibold pt-[67px] pb-2">BUYER'S PHOTO</h2>
          </div>
          <div className="grid grid-cols-6 ">
            <div className="w-[88px] h-[88px]">
              <Image src={"/img/Rectangle 134.png"} width={88} height={88} className="rounded-lg" alt="product" />
            </div>
            <div className="w-[88px] h-[88px]">
              <Image src={"/img/Rectangle 134.png"} width={88} height={88} className="rounded-lg" alt="product" />
            </div>
            <div className="w-[88px] h-[88px]">
              <Image src={"/img/Rectangle 134.png"} width={88} height={88} className="rounded-lg" alt="product" />
            </div>
            <div className="w-[88px] h-[88px]">
              <Image src={"/img/Rectangle 134.png"} width={88} height={88} className="rounded-lg" alt="product" />
            </div>
            <div className="w-[88px] h-[88px]">
              <Image src={"/img/Rectangle 134.png"} width={88} height={88} className="rounded-lg" alt="product" />
            </div>
            <div className="w-[88px] h-[88px]">
              <Image src={"/img/Rectangle 134.png"} width={88} height={88} className="rounded-lg" alt="product" />
            </div>
          </div>
          <div className="flex justify-between items-center pt-10 pb-8">
            <div>
              <h2 className="text-base text-[#151875] font-semibold ">SELECTED REVIEWS</h2>
              <p className="text-[#212121] text-sm pt-[14px]">Showing 10 out of 156 reviews</p>
            </div>
            <div className="flex items-center gap-2 pr-[6px]">
              <p className="font-bold text-sm">Sort</p>
              <div>
                <select name="sort" id="sort" className="outline-none  border bg-transparent text-slate-500 text-sm  px-[8px] py-[10px] rounded-md">
                  <option value="title-asc">Latest</option>
                  <option value="#" disabled></option>
                  <option value="price-lowest">Lowest Rating</option>
                  <option value="#" disabled></option>
                  <option value="price-highest">Highest Rating</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            {datas.map((data) => (
              <div key={data.id} className="border-b border-b-slate-200 pb-3">
                <div className="flex justify-between items-center pb-[7px]">
                  <div className="flex items-center gap-2">
                    <div>
                      <Rating name="read-only" value={5} readOnly className="text-yellow-300 text-[25px]" />
                    </div>
                    <div className="pb-1">
                      <p className="text-sm text-[#6D7588]">5 months ago</p>
                    </div>
                  </div>
                  <div className="relative">
                    <button onClick={(e) => setReport(!report)}>
                      <MoreVertOutlinedIcon className="text-[#2E3137]" />
                    </button>
                    <div className="absolute right-3">
                      {report ? (
                        <Link className="px-6 py-2 shadow-md rounded text-sm" href={"#"}>
                          Report
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Image src={"/img/1237505.jpg"} width={32} height={32} alt="profile" className="rounded-full fill w-8 h-8 " />
                  </div>
                  <div>
                    <p className="text-base font-bold">Marsella</p>
                  </div>
                </div>
                <div className="pt-[5px] pb-[9px]">
                  <p className="text-[#6D7588] text-[0.85rem]">Variant: Black</p>
                </div>
                <div className="pb-[18px]">
                  <p className="text-[1rem] leading-5">great..order according.guarantee is also safe</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Image src={"/img/Rectangle 134.png"} width={64} height={64} className="rounded-lg w-16 h-16" alt="profile" />
                    </div>
                    <div>
                      <Image src={"/img/Rectangle 134.png"} width={64} height={64} className="rounded-lg w-16 h-16" alt="profile" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-[14px]">
                  <div className="flex items-center gap-2">
                    <button>
                      <ThumbUpRoundedIcon className="text-[20px] text-[gray]" />
                    </button>
                    <div>
                      <p>Helped</p>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => setSeeReply((a) => (a === data.id ? null : data.id))}>
                      <span className="text-base">{seeReply === data.id ? "Hide Reply" : "See Reply"}</span>
                      <span>{seeReply === data.id ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}</span>
                    </button>
                  </div>
                </div>
                {seeReply === data.id && (
                  <div id={data.id} className="w-full bg-[#F0F3F7] rounded">
                    <div className="p-3">
                      <div className="flex gap-2 items-center">
                        <div>
                          <h3 className="text-base font-bold">Siska</h3>
                        </div>
                        <div>
                          <p className="font-bold text-purple text-sm bg-purple bg-opacity-40 px-[2px] rounded">Admin</p>
                        </div>
                        <div>
                          <p className="text-sm text-[#6D7588]">3 months ago</p>
                        </div>
                      </div>
                      <p>Hi Sis Marsella, Can you please provide us with your order number / phone number by chat, so that we can follow up if there is a problem / our service is not acceptable.</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/4 pt-[67px] relative">
        <FixedElement />
      </div>
    </div>
  );
};

export default Review;
