"use client";
import React, { useState, forwardRef, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Page = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    imageFile: null,
    title: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    color: "",
    quantity: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("thumbnail", formData.imageFile);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("brand", formData.brand);
    formDataToSend.append("color", formData.color);
    formDataToSend.append("quantity", formData.quantity);

    const response = await fetch(`${process.env.API_URL}/api/products/create-product`, {
      method: "POST",
      body: formDataToSend,
    });
    if (response.ok) {
      setFormData({
        imageFile: null,
        title: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        color: "",
        quantity: "",
      });
      setOpen(true);
      setLoading(false);
    }
    setTimeout(() => {
      router.push("/main/admin/product");
    }, 3000);
  };

  return (
    <>
      <section className="pt-[146px] pb-[121px]">
        <div className="bg-[#F6F5FF] w-full h-[286px]">
          <div className="flex items-center h-full px-[150px]">
            <div>
              <h1 className="text-[#101750] text-[36px] font-semibold">Sell Your Products</h1>
              <p className="text-base pt-[9px] text-[#FB2E86]">You Can sell All Items Here </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-[150px] pb-[264px]">
          <div>
            <h2 className="text-[24px] text-[#1D3178] font-semibold pb-4">Post Product</h2>
            <p className="text-[12px] text-[#1D3178] font-medium pb-[25px]">Give Detail The Product</p>
          </div>
          <div className="w-full  bg-[#F8F8FD]">
            <div className="text-[#1D3178] text-[18px] font-semibold pt-[69px] pb-[43px] px-9">Provide Your Product Details</div>
            <div>
              <form action="" onSubmit={handleSubmit}>
                <div className="px-9 pb-7">
                  <input
                    name="title"
                    id="title"
                    type="text"
                    placeholder="title"
                    className="w-full bg-transparent text-slate-600  outline-none border-b-[3px] border-[#BFC6E0] py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="px-9 pb-7">
                  <textarea
                    name="description"
                    id="description"
                    cols="20"
                    rows="10"
                    placeholder="description"
                    className="w-full bg-transparent text-slate-600 outline-none border-b-[3px] border-[#BFC6E0] py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="px-9 pb-7">
                  <input
                    name="price"
                    id="price"
                    className="w-full bg-transparent text-slate-600 outline-none border-b-[3px] border-[#BFC6E0] py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                    type="number"
                    placeholder="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="px-9 pb-7">
                  <input
                    name="category"
                    id="category"
                    className="w-full bg-transparent text-slate-600 outline-none border-b-[3px] border-[#BFC6E0] py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                    type="text"
                    placeholder="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="px-9 pb-7">
                  <input
                    name="brand"
                    id="brand"
                    className="w-full bg-transparent text-slate-600 outline-none border-b-[3px] border-[#BFC6E0] py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                    type="text"
                    placeholder="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="px-9 pb-7">
                  <input
                    name="color"
                    id="color"
                    className="w-full bg-transparent text-slate-600 outline-none border-b-[3px] border-[#BFC6E0] py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                    type="text"
                    placeholder="color"
                    value={formData.color}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="px-9 pb-7">
                  <input
                    name="quantity"
                    id="quantity"
                    className="w-full bg-transparent text-slate-600 outline-none border-b-[3px] border-[#BFC6E0] py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                    type="number"
                    placeholder="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="px-9 pb-7">
                  <input
                    id="imageFile"
                    name="imageFile"
                    className="bg-transparent  outline-none  py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="px-9 pb-[65px]">
                  <button type="submit" className="bg-[#FB2E86] px-[23px] py-[14px] text-[16px] text-[#FFFFFF] font-medium rounded hover:bg-purple transition duration-300">
                    {loading ? "Sending..." : "Post Product"}
                  </button>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                      Product Added Successfully !!!
                    </Alert>
                  </Snackbar>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
