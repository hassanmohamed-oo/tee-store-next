"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { addToCart } from "@/store/Cartslice";
import { Dialog, DialogPanel } from "@headlessui/react";
import { addToWish } from "@/store/Wishslice";
import { CartItem } from "@/constants";

const Wishlist = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [selectedItem, setSelectedItem] = useState<CartItem | null>(null); // إضافة حالة لحفظ تفاصيل المنتج المحدد
  const dispatch = useDispatch<AppDispatch>();
  const wish = useSelector((state: RootState) => state.wish.items);
  const cart = useSelector((state: RootState) => state.cart.items);

  const hasItems = wish && wish.length > 0;

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  const handleDelWish = (item: CartItem) => {
    dispatch(addToWish(item));
  };

  const handleItemClick = (item: CartItem) => {
    setSelectedItem(item); // حفظ تفاصيل المنتج المحدد
    setIsOpen(true); // فتح الـ Dialog
  };

  return (
    <div className="min-h-screen bg-dark text-light flex flex-col items-center justify-center pt-14">
      {hasItems ? (
        <div className="w-full flex flex-wrap md:gap-12 items-center justify-around md:justify-center pt-14 md:px-12">
          <h1 className="text-8xl w-full font-bold mb-8 text-center pb-4">
            Wishlist
          </h1>
          {wish.map((tshirt) => {
            const isAdded = cart.some(
              (i) => i.id === tshirt.id && i.addedToCart
            );
            return (
              <div
                key={tshirt.id}
                onClick={() => handleItemClick(tshirt)} // تعديل هنا
                className="relative group cursor-pointer my-6 md:my-0 w-2/5 md:w-[220px] h-auto bg-gradient-to-tr from-dark to-dark-secondary rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl"
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
                      handleDelWish(tshirt);
                    }}
                  >
                    <i className={`${"fa-solid fa-heart"}`}></i>
                  </button>
                </div>

                <div className="md:p-6 p-2 text-center  text-light rounded-b-2xl">
                  <h2 className="text-xl font-semibold text-light transition-all duration-300 group-hover:text-white">
                    {tshirt.name} - {tshirt.catigory}
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
          {/* الـ Dialog */}
          <Dialog
            open={isOpen}
            as="div"
            className="relative z-50"
            onClose={() => setIsOpen(false)}
          >
            <div className="fixed inset-0 w-screen overflow-y-auto bg-gray-900 bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4">
              <DialogPanel className="relative max-w-lg w-full rounded-xl p-6 shadow-2xl bg-opacity-40 bg-gray-900">
                {selectedItem && (
                  <>
                    <div className="w-full flex gap-4 overflow-hidden">
                      <Image
                        src={selectedItem.src}
                        width={1500}
                        height={1500}
                        alt={selectedItem.name}
                        className="w-2/3 object-contain rounded-md"
                      />
                      <div className="w-1/3 flex flex-col gap-2 justify-between">
                        <Image
                          src={selectedItem.src}
                          width={1500}
                          height={100}
                          alt={selectedItem.name}
                          className="w-full object-contain rounded-md"
                        />
                        <Image
                          src={selectedItem.src}
                          width={1500}
                          height={300}
                          alt={selectedItem.name}
                          className="w-full object-contain rounded-md"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <h1 className="text-3xl text-white font-semibold">
                        {selectedItem.name}
                      </h1>
                      <p className="mt-2 text-sm text-gray-400">
                        {selectedItem.catigory}
                      </p>
                      <h1 className="mt-2 text-lg text-gray-300">
                        Price:{" "}
                        <span className="font-bold text-white">
                          ${selectedItem.price}
                        </span>
                      </h1>

                      <div className="size flex gap-3 items-center bg-transparent mt-4">
                        <label className="block text-white font-medium">
                          Size:
                        </label>
                        <select className="bg-gray-700 bg-opacity-60 p-2 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-brimary">
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4 items-center">
                      <button
                        onClick={() => {
                          handleAddToCart(selectedItem);
                        }}
                        className={`flex-1 py-2 rounded-md ${
                          cart.some(
                            (i) => i.id === selectedItem?.id && i.addedToCart
                          )
                            ? "bg-green-400"
                            : "bg-brimary"
                        } bg-opacity-50 hover:bg-opacity-100 text-white font-semibold transition-all shadow-lg`}
                      >
                        {`${
                          cart.some(
                            (i) => i.id === selectedItem?.id && i.addedToCart
                          )
                            ? "Added"
                            : "Add To Cart"
                        }`}
                      </button>
                      <button
                        onClick={() => {
                          handleDelWish(selectedItem);
                        }}
                      >
                        <i
                          className={` ${
                            wish.some(
                              (i) => i.id === selectedItem?.id && i.wished
                            )
                              ? "fa-solid"
                              : "fa-regular"
                          } fa-heart text-2xl text-white hover:text-primary transition-all`}
                        ></i>
                      </button>
                    </div>
                  </>
                )}
              </DialogPanel>
            </div>
          </Dialog>
        </div>
      ) : (
        <div className="text-center bg-gray-900 bg-opacity-20 shadow-lg p-8 rounded-xl transform transition-all duration-500">
          <h1 className="text-5xl font-semibold mb-6 text-gray-100">
            Your Wishlist is Empty
          </h1>
          <p className="text-lg mb-8 text-gray-400">
            Explore our products and add like it!
          </p>
          <Link
            href="./#shop"
            className="py-3 px-6 bg-brimary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
