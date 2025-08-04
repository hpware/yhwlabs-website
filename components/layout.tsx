"use client";
import { useState, useEffect } from "react";
import { DoorOpenIcon, HouseIcon, MenuIcon, PlusIcon } from "lucide-react";
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
        className={`min-h-12 fixed z-50 inset-x-0 backdrop-blur-lg flex flex-row justify-between text-center border transition-all duration-300 ${scrolled ? "mt-5 rounded-2xl mx-7 shadow border-gray-300/30 p-1" : "mt-0 p-4 rounded-xl border-gray-300/0"}`}
      >
        <div className="p-4 mx-4">
          <div className="flex flex-row items-center justify-center text-center">
            <span className="text-xl font-bold">yhwLabs</span>
          </div>
        </div>
        <div className="p-2 mx-2 flex-row items-center justify-center text-center hidden md:flex gap-2">
          <Link
            href="/"
            className="border-2 border-teal-400 hover:bg-teal-400/50 p-2 group rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md shadow-lg transition-all duration-200"
          >
            <div className="ml-2 mr-2 flex flex-row gap-1">
              <HouseIcon />
              <span>{dict.nav.home}</span>
            </div>
          </Link>
          <Link
            href="/portal"
            className="border-2 border-teal-400 hover:bg-teal-400/50 p-2 group rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md shadow-lg transition-all duration-200"
          >
            <div className="ml-2 mr-2 flex flex-row gap-1">
              <DoorOpenIcon />
              <span>Portal</span>
            </div>
          </Link>
          <div className="border-2 border-blue-400 hover:bg-blue-400/50 py-2 px-3 group rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md shadow-lg transition-all duration-200">
            <select className="bg-black group-hover:bg-blue-400/50 border-0 border-black transition-all duration-200">
              <option>en</option>
              <option>zh</option>
              <option>de</option>
            </select>
          </div>
        </div>
        <div className="p-2 mx-2 flex-row items-center justify-center text-center flex md:hidden">
          <button>
            <MenuIcon />
          </button>
        </div>
      </div>
      <div className="min-h-[100px]"></div>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
