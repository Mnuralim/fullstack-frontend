"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans max-w-[1920px]" style={{ scrollBehavior: "smooth" }}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
