"use client";
import Footer from "./footer";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <div className="mb-52"></div>
      <Footer />
    </>
  );
}
