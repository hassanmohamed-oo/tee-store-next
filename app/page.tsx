"use client";
import { Hero, Prodacts, About, NavBar, Footer } from "@/components";
import { useState, useEffect } from "react";
import { tshirts } from "@/constants";
import Image from "next/image";

export default function Home() {
  const [Loading, setLoading] = useState(true);
  const getProdacts = async () => {
    setLoading(true);
    try {
      await tshirts;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProdacts();
  }, []);

  return (
    <>
      {Loading ? (
        <div className="flex justify-center  items-center h-screen  bg-[#061944] ">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-8 border-solid border-[#f15925] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <Hero />
          <Prodacts />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}
