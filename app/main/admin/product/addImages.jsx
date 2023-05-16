"use client";

import React, { useState, forwardRef } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddImages = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState([]);

  const router = useRouter();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleFileChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  async function handleAddImages(e) {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    images.forEach((image) => {
      formDataToSend.append("images", image);
    });

    const response = await fetch(`http://localhost:5000api/products/add-images/${product._id}`, {
      method: "PUT",
      body: formDataToSend,
    });
    console.log(response);
    if (response.status === 200) {
      setOpen(true);
      setLoading(false);
    }
    setTimeout(() => {
      router.refresh();
      setModal(false);
    }, 2000);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className=" py-[7px] text-white  px-[10px] rounded-md bg-[#DE9034] hover:bg-opacity-80" onClick={handleChange}>
        Add Images
      </button>

      <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

      <div className="modal z-[99999999999999] ">
        <div className="modal-box overflow-hidden">
          <div>
            <div className="text-[#1D3178] text-[18px] font-semibold pt-[69px] pb-[43px] px-9">Add Images</div>
            <form action="" onSubmit={handleAddImages}>
              <div className="px-9 pb-7">
                <label htmlFor="imageFile" className="block">
                  Image :
                </label>
                <input
                  id="imageFile"
                  name="imageFile"
                  className="bg-transparent  outline-none  py-4 placeholder:text-[#C1C8E1] placeholder:text-[14px] placeholder:font-medium placeholder:capitalize"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                />
              </div>

              <div className="px-9 pb-[65px]">
                <button type="submit" className="bg-[#FB2E86] px-[23px] py-[7px] text-[16px] text-[#FFFFFF] font-medium rounded hover:bg-purple transition duration-300">
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action mt-0">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Add Images successfully !
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddImages;
