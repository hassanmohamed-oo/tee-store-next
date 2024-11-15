import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* القسم العلوي من الفوتر */}
      <div
        className="w-screen border-t-2 flex flex-col lg:flex-row lg:mb-40 mb-10"
        id="contact"
      >
        {/* القسم الأول */}
        <div className="lg:w-1/2 w-full h-full p-8 lg:p-16 pt-10 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 mb-3">
            <Image alt="" width={50} height={100} src="/data/png-icon.png" />
            <h1 className="text-2xl font-bold">TeeStore</h1>
          </div>
          <p className="tracking-wider text-center lg:text-left">
            tee store 2024
          </p>
          <p className="tracking-wider text-center lg:text-left">
            All rights reserved ©
          </p>
        </div>

        {/* القسم الثاني */}
        <div className="lg:w-1/2 w-full h-full p-8 lg:p-10 flex flex-col items-center gap-5">
          <h1 className="text-4xl lg:text-7xl font-semibold">Contact</h1>
          <div className="flex justify-around w-full max-w-md">
            <Link target="_blank" href="https://www.facebook.com/teestore.eg/">
              <i className="fa-brands fa-facebook text-3xl lg:text-7xl"></i>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/teestore.eg/">
              <i className="fa-brands fa-instagram text-3xl lg:text-7xl"></i>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/hassan-mohamed-77b9532a5/"
            >
              <i className="fa-brands fa-linkedin text-3xl lg:text-7xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* القسم السفلي من الفوتر */}
      <div className="flex flex-col lg:flex-row h-1/8 justify-between p-5 lg:p-7 px-8 lg:px-16 items-center text-center lg:text-left">
        <h2 className="text-sm lg:text-base">
          @2024 TeeStore. All Rights reserved
        </h2>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 mt-4 lg:mt-0">
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
