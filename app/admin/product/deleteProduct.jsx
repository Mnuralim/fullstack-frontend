"use client";
import React, { forwardRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DeleteProduct = ({ product }) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

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

  async function handleDelete(prodId) {
    try {
      const response = await fetch(`http://localhost:5000/api/products/delete-product/${prodId}`, {
        method: "DELETE",
      });
      console.log(response.ok);
      setModal(false);

      if (response.ok) {
        setOpen(true);
      }

      setTimeout(() => {
        router.refresh();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className=" py-[7px] text-white  px-[13px] rounded-md bg-[#FF2AAA] hover:bg-opacity-80" onClick={handleChange}>
        {loading ? "Deleting..." : "Delete"}
      </button>

      <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

      <div className="modal z-[99999999999999]">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are sure to delete {product.title} ?</h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>

            <button type="button" onClick={() => handleDelete(product._id)} className="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Product Deleted Successfully !!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DeleteProduct;
