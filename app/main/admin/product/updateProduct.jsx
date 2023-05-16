"use client";
import React, { useState, forwardRef, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UpdateProduct = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const handleModalChange = () => {
    setModal(!modal);
  };

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

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:5000/api/products/${product._id}`, {
        cache: "no-store",
      });
      const data = await response.json();
      setFormData(data);
    };
    fetchProduct();
  }, [product._id]);

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

    const response = await fetch(`http://localhost:5000/api/products/update-product/${product._id}`, {
      method: "PUT",
      body: formDataToSend,
    });
    console.log(response);
    if (response.status === 201 || response.ok) {
      setOpen(true);
      setLoading(false);
    }
    setTimeout(() => {
      // router.push("/admin/product");
      router.refresh();
      setModal(false);
    }, 2000);
  };
  return (
    <div>
      <button className=" py-[7px] px-[10px] rounded-md text-white bg-purple hover:bg-opacity-80" onClick={handleModalChange}>
        Update
      </button>

      <input type="checkbox" checked={modal} onChange={handleModalChange} className="modal-toggle" />

      <div className="modal z-[99999999999999] ">
        <div className="modal-box bg-[#F8F8FD] rounded-none">
          <div className="w-full ">
            <div className="w-full ">
              <div className="text-[#1D3178] text-[18px] font-semibold pt-[69px] pb-[43px] px-9">Update Your Product</div>
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
                    <button onClick={handleModalChange} type="submit" className="bg-[#FB2E86] px-[23px] py-[14px] text-[16px] text-[#FFFFFF] font-medium rounded hover:bg-purple transition duration-300">
                      {loading ? "Updating..." : "Update Product"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModalChange}>
              Close
            </button>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Update successfully !
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UpdateProduct;
