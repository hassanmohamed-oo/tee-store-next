"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="w-full text-white shadow-lg bg-brimary  bg-opacity-100 fixed top-0 z-50">
      <div className="md:px-6 pl-2 w-full  -mb-2 flex justify-between  items-center">
     
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/data/png.png"
            alt="Logo"
            width={120}
            height={100}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          <Link
            href="./#t-shirts"
            className="text-base font-medium hover:text-orange-500 transition-all duration-300"
          >
            T-shirts
          </Link>
          <Link
            href="./#hoodies"
            className="text-base font-medium hover:text-orange-500 transition-all duration-300"
          >
            Hoodies
          </Link>
          <Link
            href="./#pants"
            className="text-base font-medium hover:text-orange-500 transition-all duration-300"
          >
            Pants
          </Link>
          <Link
            href="./#contact"
            className="text-base font-medium hover:text-orange-500 transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            href="./#about"
            className="text-base font-medium hover:text-orange-500 transition-all duration-300"
          >
            About
          </Link>
        </div>

       
        <div className="flex items-center p-2 rounded-md md:w-[350px]  ">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-white p-2  md:rounded-s-md  md:block hidden border-none outline-none w-full text-black placeholder:text-black"
            placeholder="Search products..."
          />
          <button className="p-2 md:bg-secondary text-white  md:rounded-e-md  ">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>

       
        <div className="  flex md:gap-6 gap-2 items-center">
          <Link href="/cart">
            <button className="bg-secondary  hover:bg-opacity-90 text-white p-2 rounded-full flex items-center gap-2 transition-all duration-300">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </Link>
          <Link href="/wishlist">
            <button className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full flex items-center gap-2 transition-all duration-300">
              <i className="fa-solid fa-heart"></i>
            </button>
          </Link>
          <Link href="/">
            <button className="hidden md:block text-base font-medium bg-secondary hover:bg-opacity-90 text-white py-2 px-4 rounded-lg transition-all duration-300 ">
              Sign Up
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-black p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-950  bg-opacity-70 backdrop-blur-md text-white p-6 flex flex-col items-center gap-4 md:hidden">
          <Link
            href="./#t-shirts"
            className="text-lg py-2 font-medium hover:text-secondary"
          >
            T-shirts
          </Link>
          <Link
            href="./#hoodis"
            className="text-lg py-2 font-medium hover:text-secondary"
          >
            Hoodies
          </Link>
          <Link
            href="./#pants"
            className="text-lg py-2 font-medium hover:text-secondary"
          >
            Pants
          </Link>
          <Link
            href="./#contact"
            className="text-lg py-2 font-medium hover:text-secondary"
          >
            Contact
          </Link>
          <Link
            href="./#about"
            className="text-lg py-2 font-medium hover:text-secondary"
          >
            About
          </Link>
          
          <Link
            href="/"
            className="text-lg p-2 font-medium mt-7 bg-secondary bg-opacity-80 hover:bg-opacity-100 text-white rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      )}

      <div className="marquee-container bg-white text-brimary p-1">
        <span className="marquee-text">
          Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders Over
          $200! 🎉 Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders
          Over $200! 🎉
        </span>
        <span className="marquee-text">
          Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders Over
          $200! 🎉 Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders
          Over $200! 🎉
        </span>
        <span className="marquee-text">
          Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders Over
          $200! 🎉 Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders
          Over $200! 🎉
        </span>
        <span className="marquee-text">
          Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders Over
          $200! 🎉 Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders
          Over $200! 🎉
        </span>
        <span className="marquee-text">
          Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders Over
          $200! 🎉 Free Shipping on Orders Over $200! 🎉 Free Shipping on Orders
          Over $200! 🎉
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
