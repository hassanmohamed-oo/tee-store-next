import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  // Variants for animations
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      <div
        className="w-full md:h-screen flex flex-col md:flex-row justify-center items-center md:items-end"
        id="about"
      >
        {/* Image with motion */}
        <motion.div
          className="md:w-[350px] w-full"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            alt=""
            width={350}
            height={300}
            src="/data/download1 (9).png"
            className="w-full"
          />
        </motion.div>

        {/* Text with motion */}
        <motion.div
          className="w-full px-8 pb-32 md:p-0 md:w-2/3 md:h-screen text-center flex justify-center items-center"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-base md:text-3xl font-normal tracking-wider">
            "Tee Store is an online streetwear brand, offering a modern
            appearance and high-quality materials for young consumers. We
            prioritize a unique shopping experience, ensuring seamless user
            interactions on our website and social media platforms. Explore our
            trendy tees with customizable designs, expressing your individual
            style through our exclusive collection. Shop now for a fashion
            journey tailored just for you!"
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
