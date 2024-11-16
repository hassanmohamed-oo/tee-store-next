import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:h-screen  overflow-hidden md:flex-row mt-32 md:mt-0  items-center ">
        <div className="w-full md:w-1/2 pl-2 md:pl-10 flex flex-col gap-2 z-10   md:pt-12">
          <h2 className="font-extrabold text-7xl md:text-[110px] leading-none ">
            LET'S <br /> EXPLORE <br />
            <span className="bg- ml-[5px] bg-[#f0f8ff] text-secondary">
              UNIQUE
            </span>{" "}
            <br /> CLOTHES.
          </h2>
          <p className="pl-2 tracking-[4px] text-xl">
            live for influential and innovative fashion!
          </p>
          <Link
            className="bg-brimary w-fit ml-2 text-white font-semibold p-2 text-3xl rounded-2xl hover:bg-opacity-50 transition-all duration-100 ease-in-out"
            href="#shop"
          >
            shop now
          </Link>
        </div>
        <div className="flex w-full md:w-1/2 justify-end  md:items-end md:h-screen -mt-20 md:mt-0 ">
          <Image
            src="/data/download (11).png"
            width={826}
            height={150}
            alt="tee store logo"
            className=" object-contain w-[630px] "
          />
        </div>
      </div>
      <div className=" w-full md:w-screen  flex justify-center items-center    flex-col ">
        <div className="w-full p-8 md:px-0 md:w-1/2 text-center text-sm md:text-xl leading-6 tracking-widest">
          <p>
            Explore our unique collection of stylish clothing designed for
            comfort and individuality. From casual essentials to standout
            pieces, find fashion that reflects your personal style.
          </p>
        </div>
        <div className="overflow-hidden flex h-fit w-full md:w-1/2 justify-around items-center md:px-0 px-8">
          <Image
            src="/data/14d63a175981871.64bd4e5da1cd7.png"
            width={1000}
            height={150}
            alt="tee store logo"
            className=" object-cover  md:w-52  w-[120px]"
          />
          <Image
            src="/data/ded73c175981871.64bd4e5c88713.jpg"
            width={1000}
            height={150}
            alt="tee store logo"
            className="object-contain md:w-52 w-[120px]"
          />
          <Image
            src="/data/teeee.jpg"
            width={1000}
            height={150}
            alt="tee store logo"
            className="object-contain md:w-52 w-[120px] "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
