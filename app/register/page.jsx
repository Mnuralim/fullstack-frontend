"use client";
import Link from "next/link";
import React, { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Page = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState("");
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
  console.log(responseStatus);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/register", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confPassword: confPassword,
        mobile: mobile,
      });
      if (response.status === 200) {
        setResponseStatus(response.status);
        setOpen(true);
        setMessage(response.data.message);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
      // return response.data;
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      {/* <section>
        <div className="flex items-center justify-center bg-[#F6F5FF] min-h-screen">
          <div className="w-full    px-[150px] ">
            <div className="py-[50px] px-[56px]">
              <div className="text-center pb-[37px]">
                <h2 className="text-[32px] font-semibold leading-[37px] pb-[7px]">Sign Up</h2>
                <p className="text-[#9096B2] text-[17px] font-normal leading-5">Create account to start using Alimn</p>
              </div>
              <div>
                <form onSubmit={handleRegister}>
                  <div className="flex justify-between pb-[23px] gap-2">
                    <div className="w-full">
                      <input type="text" placeholder="Firstname" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className="w-full">
                      <input type="text" placeholder="Lastname" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 pb-[23px]">
                    <div className="w-full">
                      <input type="email" placeholder="Email Address" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="w-full">
                      <input type="text" placeholder="Mobile" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 pb-[50px]">
                    <div className="w-full">
                      <input type="password" placeholder="Password" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="w-full">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="pb-7">
                    <button className="w-full py-[14px] text-[17px]  text-white bg-[#FB2E86] font-bold rounded-[3px] hover:bg-purple  transition duration-300" type="submit">
                      Register
                    </button>
                  </div>
                  <div className="text-center ">
                    <p className="text-[#9096B2] text-[17px]">
                      Already have an Account?
                      <Link className="text-[#101750] " href={"/"}>
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
                <p className="text-xs text-pink-600">{message}</p>
              </div>
            </div>
          </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            {message} !!!
          </Alert>
        </Snackbar>
      </section> */}

      <section>
        <div className="grid h-screen grid-cols-2 ">
          <div className="flex items-center justify-center ">
            <div className="w-full pl-[85px] pr-[75px]">
              <h1 className="text-center text-[50px] pb-3 font-semibold">Welcome...</h1>
              <h1 className="pb-[47px] text-[#000000] text-[32px] font-medium">Sign Up</h1>
              <div>
                <form onSubmit={handleRegister}>
                  <div className="flex justify-between pb-[23px] gap-2">
                    <div className="w-full">
                      <input type="text" placeholder="Firstname" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className="w-full">
                      <input type="text" placeholder="Lastname" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 pb-[23px]">
                    <div className="w-full">
                      <input type="email" placeholder="Email Address" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="w-full">
                      <input type="text" placeholder="Mobile" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 pb-[50px]">
                    <div className="w-full">
                      <input type="password" placeholder="Password" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="w-full">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="pb-7">
                    <button className="w-full py-[14px] text-[17px]  text-white bg-[#FB2E86] font-bold rounded-[3px] hover:bg-purple  transition duration-300" type="submit">
                      Register
                    </button>
                  </div>
                  <div className="text-center ">
                    <p className="text-[#9096B2] text-[17px]">
                      Already have an Account?
                      <Link className="text-[#101750] " href={"/"}>
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
                <p className="text-xs text-pink-600">{message}</p>
              </div>
            </div>
          </div>
          <div className="bg-purple">
            <div className="w-full h-full" style={{ backgroundImage: "url('/img/login-page.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
          </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            {message} !!!
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};

export default Page;
