"use client";
import Link from "next/link";
import React, { useState, forwardRef, useEffect } from "react";
import { signIn } from "next-auth/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(data.error);
      if (data.ok) {
        router.push("/main");
      } else {
        setOpen(true);
        setMessage(data.error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <section>
        <div className="grid h-screen grid-cols-2 ">
          <div className="flex items-center justify-center ">
            <div className="w-full pl-[85px] pr-[75px]">
              <h1 className="text-center text-[50px] pb-3 font-semibold">Welcome...</h1>
              <h1 className="pb-[47px] text-[#000000] text-[32px] font-medium">Log In</h1>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="pb-[33px]">
                    <input name="email" type="email" placeholder="Email Address" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="pb-[33px]">
                    <input type="password" placeholder="Password" className="w-full outline-none border bg-transparent p-4 rounded-sm placeholder:text-[#9096B2]" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="pb-[23px]">
                    <Link className="text-[17px] text-[#9096B2]" href={"#"}>
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="pb-7">
                    <button className="w-full py-[14px] text-[17px]  text-white bg-[#FB2E86] font-bold rounded-[3px] hover:bg-purple  transition duration-300" type="submit">
                      Sign In
                    </button>
                  </div>
                  <div className="text-center ">
                    <p className="text-[#9096B2] text-[17px]">
                      Don't have an Account?
                      <Link className="text-[#101750] " href={"/register"}>
                        Create account
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-purple">
            <div className="w-full h-full" style={{ backgroundImage: "url('/img/login-page.png')", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
          </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {message} !!!
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};

export default Page;
