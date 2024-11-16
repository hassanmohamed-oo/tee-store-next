"use client";
import React, { useState } from "react";
import { tshirts } from "@/constants";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { addToCart } from "@/store/Cartslice";
import { addToWish } from "@/store/Wishslice";
import { CartItem } from "@/constants";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.items);
  const wish = useSelector((state: RootState) => state.wish.items);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CartItem>(cart[0]);
  const [visibleCount, setVisibleCount] = useState(4); // Initial number of items to show
  const [visibleCount1, setVisibleCount1] = useState(4); // Initial number of items to show
  const [visibleCount2, setVisibleCount2] = useState(4); // Initial number of items to show

  const handleOpenDialog = (product: CartItem) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  const handleAddWish = (item: CartItem) => {
    dispatch(addToWish(item));
  };

  return (
    <div className="w-full flex flex-col items-center gap-3 py-20" id="shop">
      <div
        className="flex items-center gap-4 w-full justify-center mt-16 mb-8 "
        id="t-shirts"
      >
        <h1 className="text-7xl md:text-9xl tracking-wider text-gradient  ">
          t-shirt
        </h1>
      </div>
      <div className="w-full flex flex-wrap md:gap-12 md:justify-center justify-around">
        {tshirts[0].slice(0, visibleCount).map((tshirt) => {
          const isAdded = cart.some((i) => i.id === tshirt.id && i.addedToCart);
          const wished = wish.some((i) => i.id === tshirt.id && i.wished);

          return (
            <div
              key={tshirt.id}
              onClick={() => handleOpenDialog(tshirt)}
              className="relative group cursor-pointer w-2/5 my-6 md:my-0 md:w-[300px] h-auto rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl"
            >
              <div className="relative   overflow-hidden rounded-t-2xl bg-opacity-90">
                <Image
                  src={tshirt.src}
                  alt={tshirt.catigory}
                  width={300}
                  height={160}
                  className="object-contain  w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

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
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          {
            visibleCount < tshirts[0].length
              ? setVisibleCount(tshirts[0].length)
              : setVisibleCount(4);
          }
        }}
        className="mt-8 px-4 py-3 flex justify-center items-center gap-2 text-xl font-bold text-white bg-brimary rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
      >
        <span>{`${
          visibleCount < tshirts[0].length ? "Show More" : "Show Less"
        }`}</span>
        <i
          className={`fa-solid ${
            visibleCount < tshirts[0].length ? "fa-caret-down" : "fa-caret-up"
          }`}
        ></i>
      </button>

      <div className="flex items-center gap-4 w-full justify-center mt-16 mb-8">
        <h1
          className="text-7xl md:text-9xl tracking-wider text-gradient "
          id="hoodies"
        >
          Hoodi
        </h1>
      </div>
      <div className="w-full flex flex-wrap md:gap-12 md:justify-center justify-around">
        {tshirts[1].slice(0, visibleCount1).map((tshirt) => {
          const isAdded = cart.some((i: any) => i.id === tshirt.id && i.addedToCart); // حل الخطأ
        const wished = wish.some((i: any) => i.id === tshirt.id && i.wished);

          return (
            <div
              key={tshirt.id}
              onClick={() => handleOpenDialog(tshirt)}
              className="relative group cursor-pointer w-2/5 my-6 md:my-0 md:w-[300px] h-auto rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl"
            >
              <div className="relative overflow-hidden rounded-t-2xl bg-opacity-90">
                <Image
                  src={tshirt.src}
                  alt={tshirt.catigory}
                  width={300}
                  height={160}
                  className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
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
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          {
            visibleCount1 < tshirts[1].length
              ? setVisibleCount1(tshirts[1].length)
              : setVisibleCount1(4);
          }
        }}
        className="mt-8 px-4 py-3 flex justify-center items-center gap-2 text-xl font-bold text-white bg-brimary rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
      >
        <span>{`${
          visibleCount1 < tshirts[1].length ? "Show More" : "Show Less"
        }`}</span>
        <i
          className={`fa-solid ${
            visibleCount1 < tshirts[1].length ? "fa-caret-down" : "fa-caret-up"
          }`}
        ></i>
      </button>

      <div className="flex items-center gap-4 w-full justify-center mt-16 mb-8">
        <h1
          className="text-7xl md:text-9xl tracking-wider text-gradient "
          id="pants"
        >
          Pants
        </h1>
      </div>
      <div className="w-full flex flex-wrap md:gap-12 md:justify-center justify-around">
        {tshirts[2].slice(0, visibleCount2).map((tshirt) => {
          const isAdded = cart.some((i) => i.id === tshirt.id && i.addedToCart);
          const wished = wish.some((i) => i.id === tshirt.id && i.wished);

          return (
            <div
              key={tshirt.id}
              onClick={() => handleOpenDialog(tshirt)}
              className="relative group cursor-pointer w-2/5 my-6 md:my-0 md:w-[300px] h-auto rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl"
            >
              <div className="relative overflow-hidden rounded-t-2xl bg-opacity-90">
                <Image
                  src={tshirt.src}
                  alt={tshirt.catigory}
                  width={300}
                  height={160}
                  className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
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
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          {
            visibleCount2 < tshirts[2].length
              ? setVisibleCount2(tshirts[2].length)
              : setVisibleCount2(4);
          }
        }}
        className="mt-8 px-4 py-3 flex justify-center items-center gap-2 text-xl font-bold text-white bg-brimary rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out"
      >
        <span>{`${
          visibleCount2 < tshirts[2].length ? "Show More" : "Show Less"
        }`}</span>
        <i
          className={`fa-solid ${
            visibleCount2 < tshirts[2].length ? "fa-caret-down" : "fa-caret-up"
          }`}
        ></i>
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="fixed inset-0 w-screen overflow-y-auto bg-gray-900 bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4">
          <DialogPanel className="relative max-w-lg w-full rounded-xl p-6 shadow-2xl bg-opacity-40 bg-gray-900">
            {selectedProduct && (
              <div className="w-full flex gap-4 overflow-hidden">
                <Image
                  src={selectedProduct.src}
                  width={1500}
                  height={1500}
                  alt={selectedProduct.name}
                  className="w-2/3 object-contain rounded-md"
                />
                <div className="w-1/3 flex flex-col gap-2 justify-between">
                  <Image
                    src={selectedProduct.src}
                    width={1500}
                    height={100}
                    alt={selectedProduct.name}
                    className="w-full object-contain rounded-md"
                  />
                  <Image
                    src={selectedProduct.src}
                    width={1500}
                    height={100}
                    alt={selectedProduct.name}
                    className="w-full object-contain rounded-md"
                  />
                </div>
              </div>
            )}

            <div className="mt-4">
              <h1 className="text-3xl text-white font-semibold">
                {selectedProduct?.name}
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                {selectedProduct?.discription}
              </p>
              <h1 className="mt-2 text-lg text-gray-300">
                Price:{" "}
                <span className="font-bold text-white">
                  ${selectedProduct?.price}
                </span>
              </h1>

              <div className="size flex gap-3 items-center bg-transparent mt-4">
                <label className="block text-white font-medium">Size:</label>
                <select className="bg-gray-700 bg-opacity-60 p-2 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex gap-4 items-center">
              <button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                }}
                className={`flex-1 py-2 rounded-md ${
                  cart.some(
                    (i) => i.id === selectedProduct?.id && i.addedToCart
                  )
                    ? "bg-green-400"
                    : "bg-brimary"
                } bg-opacity-50 hover:bg-opacity-100 text-white font-semibold transition-all shadow-lg`}
              >
                {`${
                  cart.some(
                    (i) => i.id === selectedProduct?.id && i.addedToCart
                  )
                    ? "Added"
                    : "Add To Cart"
                }`}
              </button>
              <button
                onClick={() => {
                  handleAddWish(selectedProduct);
                }}
              >
                <i
                  className={` ${
                    wish.some((i) => i.id === selectedProduct?.id && i.wished)
                      ? "fa-solid"
                      : "fa-regular"
                  } fa-heart text-2xl text-white hover:text-primary transition-all`}
                ></i>
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default Products;
