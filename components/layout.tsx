"use client";
import { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Footer from "./footer";
export default function Layout({
  children,
  dict,
}: Readonly<{
  children: React.ReactNode;
  dict: any;
}>) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/** Navbar */}
      <div
        className={`min-h-12 fixed z-50 inset-x-0 border border-gray-300/30 shadow backdrop-blur-lg flex flex-row justify-between text-center transition-all duration-300 ${scrolled ? "mt-5 rounded-4xl mx-7" : "mt-2 rounded-xl mx-4"}`}
      >
        <div className="p-2 mx-2">
          <div className="flex flex-row items-center justify-center text-center">
            <span className="text-xl font-bold ml-2">yhwLabs</span>
          </div>
        </div>
        <div className="p-2 mx-2 flex-row items-center justify-center text-center hidden md:flex">
          <Link href="/" className="ml-2 mr-2">
            <span>{dict.nav.home}</span>
          </Link>
        </div>
        <div className="p-2 mx-2 flex-row items-center justify-center text-center flex md:hidden">
          <button>
            <MenuIcon />
          </button>
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
