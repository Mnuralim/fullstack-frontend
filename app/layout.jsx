import Footer from "./footer";
import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans max-w-[1920px]" style={{ scrollBehavior: "smooth" }}>
        <Header />
        {children}
        <div className="mb-52"></div>
        <Footer />
      </body>
    </html>
  );
}
