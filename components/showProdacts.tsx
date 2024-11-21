"use client";
import React from "react";
import { CartItem, tshirts } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { addToCart } from "@/store/Cartslice";
import { addToWish } from "@/store/Wishslice";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProdactShowProps {
  ProdactName: "T_shirts" | "Hoodies" | "Pants";
  visibleCount: number;
  setVisibleCount: (value: number) => void;
  setSelectedProduct: (Prodact: CartItem) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const ShowProdacts: React.FC<ProdactShowProps> = ({
  ProdactName,
  visibleCount,
  setSelectedProduct,
  setIsOpen,
  setVisibleCount,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.items);
  const wish = useSelector((state: RootState) => state.wish.items);

  const handleOpenDialog = (product: CartItem) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleAddWish = (item: CartItem) => {
    dispatch(addToWish(item));
  };

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      {/* العنوان مع حركة الانزلاق */}
      <motion.div
        className="flex items-center gap-4 w-full justify-center mt-16 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-7xl md:text-9xl tracking-wider text-gradient"
          id="hoodies"
        >
          {ProdactName!=="T_shirts"?ProdactName:"T-shirts"}
        </h1>
      </motion.div>

      {/* البطاقات */}
      <div className="w-full flex flex-wrap md:gap-12 md:justify-center justify-around">
        {tshirts[ProdactName].slice(0, visibleCount).map((tshirt) => {
          const isAdded = cart.some(
            (i: any) => i.id === tshirt.id && i.addedToCart
          );
          const wished = wish.some((i: any) => i.id === tshirt.id && i.wished);

          return (
            <motion.div
              key={tshirt.id}
              onClick={() => handleOpenDialog(tshirt)}
              className="relative group cursor-pointer w-2/5 my-6 md:my-0 md:w-[300px] h-auto rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="relative overflow-hidden rounded-t-2xl bg-opacity-90">
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={tshirt.src}
                    alt={tshirt.catigory}
                    width={300}
                    height={160}
                    loading="lazy"
                    className="object-cover w-full transition-transform duration-500 ease-in-out"
                  />
                </motion.div>
                <div className="absolute top-1 left-1.5 text-[9px] md:top-2 md:left-2 bg-primary text-xs text-white md:px-3 md:py-1 rounded-full shadow-sm">
                  New Arrival
                </div>
                <button
                  className={`absolute top-1 right-1.5 md:top-4 md:right-4 text-2xl hover:scale-125 transition-transform duration-300`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddWish(tshirt);
                  }}
                >
                  <i
                    className={`${
                      wished ? "fa-solid fa-heart" : "fa-regular fa-heart"
                    }`}
                  ></i>
                </button>
              </div>

              <div className="md:p-6 p-2 text-center text-light rounded-b-2xl">
                <h2 className="text-xl font-semibold text-light transition-all duration-300 group-hover:text-white">
                  {tshirt.name}
                </h2>
                <p className="mt-2 text-4xl font-bold text-primary flex items-center justify-center gap-1">
                  <span className="text-sm">$</span>
                  {tshirt.price}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(tshirt);
                  }}
                  className={`md:mt-6 w-full py-3 ${
                    isAdded ? "bg-green-400 hover:bg-green-500" : ""
                  } text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:bg-brimary transition-all duration-300 ease-in-out flex items-center justify-center gap-2`}
                >
                  <i
                    className={`${
                      isAdded
                        ? "fa-solid fa-circle-check"
                        : "fa-solid fa-cart-plus"
                    }`}
                  ></i>
                  {`${isAdded ? "Done" : "Add to Cart"}`}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* زر Show More */}
      <motion.button
        onClick={() => {
          visibleCount < tshirts[ProdactName].length
            ? setVisibleCount(tshirts[ProdactName].length)
            : setVisibleCount(4);
        }}
        className="mt-8 px-4 py-3 flex justify-center items-center gap-2 text-xl font-bold text-white bg-brimary rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
      >
        <span>{`${
          visibleCount < tshirts[ProdactName].length ? "Show More" : "Show Less"
        }`}</span>
        <i
          className={`fa-solid ${
            visibleCount < tshirts[ProdactName].length
              ? "fa-caret-down"
              : "fa-caret-up"
          }`}
        ></i>
      </motion.button>
    </>
  );
};

export default ShowProdacts;
