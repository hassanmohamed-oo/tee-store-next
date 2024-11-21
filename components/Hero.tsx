import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <>
      <div className="flex flex-col md:h-screen overflow-hidden md:flex-row mt-24 md:mt-0 md:pt-14 items-center">
        <motion.div
          className="w-4/5 m-auto   md:w-1/2 text-center md:text-left md:pl-10 flex flex-col gap-2 z-10"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h2 className="font-extrabold text-[66px] md:text-[110px] overflow-hidden  leading-none">
            LET'S <br /> EXPLORE <br />
            <span className="ml-[4px] bg-[#f0f8ff] text-secondary">
              UNIQUE
            </span>{" "}
            <br /> CLOTHES.
          </h2>
          <p className="pl-2 tracking-[4px] text-xl">
            live for influential and innovative fashion!
          </p>
          <motion.div whileHover={{ scale: 1.1 }} className="m-auto md:ml-2 w-fit">
            <Link
              className="bg-brimary text-white font-semibold p-2 text-3xl rounded-2xl hover:bg-opacity-50 transition-all duration-100 ease-in-out"
              href="#shop"
            >
              shop now
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full md:w-1/2 justify-end md:items-end md:h-screen  mt-0"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <Image
            src="/data/download (11).png"
            width={826}
            height={150}
            alt="tee store logo"
            className="object-contain w-[630px]"
          />
        </motion.div>
      </div>

      <div className="w-full md:w-screen flex justify-center items-center flex-col">
        <motion.div
          className="w-full p-8 md:px-0 md:w-1/2 text-center text-sm md:text-xl leading-6 tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
        >
          <p>
            Explore our unique collection of stylish clothing designed for
            comfort and individuality. From casual essentials to standout
            pieces, find fashion that reflects your personal style.
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden flex h-fit w-full md:w-1/2 justify-around items-center md:px-0 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.3 } }}
        >
          <motion.div
 
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/data/14d63a175981871.64bd4e5da1cd7.png"
              width={1000}
              height={150}
              alt="tee store logo"
              className="object-cover md:w-52 w-[120px]"
            />
          </motion.div>
          <motion.div
 
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/data/ded73c175981871.64bd4e5c88713.jpg"
              width={1000}
              height={150}
              alt="tee store logo"
              className="object-contain md:w-52 w-[120px]"
            />
          </motion.div>
          <motion.div

            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/data/teeee.jpg"
              width={1000}
              height={150}
              alt="tee store logo"
              className="object-contain md:w-52 w-[120px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
