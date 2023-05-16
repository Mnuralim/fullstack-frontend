"use client";
import Footer from "./footer";
import { SessionProvider } from "next-auth/react";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <>
      <SessionProvider>
        <Header />
        {children}
        <div className="mb-52"></div>
        <Footer />
      </SessionProvider>
    </>
  );
}
