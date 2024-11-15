"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch,useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { removeFromCart,updateQuantity } from "@/store/Cartslice";
import { CartItem } from "@/constants";

  const CartPage = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state:RootState) => state.cart.items);

  const handleRemoveCart = (itemId:number) => {
    dispatch(removeFromCart(itemId));
  }


  const hasItems = cart && cart.length > 0;
  const totalPrice = cart.reduce(
    (total:number, item:CartItem) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id:number, amount:number) => {
    dispatch(updateQuantity({id , amount}));
  };

  return (
    <div className="min-h-screen bg-dark text-light flex flex-col items-center justify-center py-16">
      {hasItems ? (
        <div className="w-full max-w-3xl p-8 bg-brimary bg-opacity-5 rounded-xl shadow-2xl transform transition-all duration-500">
          <h1 className="text-4xl font-bold mb-8 text-center border-b pb-4">
            Your Cart
          </h1>
          <ul className="space-y-6">
            {cart.map((item:CartItem) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-5 bg-black bg-opacity-20 rounded-lg shadow-lg transition hover:bg-opacity-40"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.src}
                    width={320}
                    height={200}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-400">Size: S</p>
                    <p className="text-sm text-gray-400">Color: Black</p>
                    <div className="flex items-center gap-2 justify-center p-1 rounded-md w-fit bg-gray-800 bg-opacity-60 ">
                      <i
                        className="fa-solid fa-minus"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      ></i>
                      <span className="text-2xl font-bold">
                        {item.quantity}
                      </span>
                      <i
                        className="fa-solid fa-plus"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <h1 className="text-2xl font-semibold ">
                    ${item.price * item.quantity}
                  </h1>
                  <button
                    className="w-12 h-12 bg-red-500 text-white font-semibold rounded-full transition duration-300 ease-in-out hover:bg-red-400"
                    onClick={() => handleRemoveCart(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8 border-t pt-6 text-2xl font-semibold">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <button className="mt-8 w-full py-3 bg-opacity-55 bg-brimary hover:bg-opacity-100 text-white font-semibold rounded-lg transition duration-300 ease-in-out shadow-md transform hover:-translate-y-1 hover:scale-105">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="text-center bg-gray-900 bg-opacity-20 shadow-lg p-8 rounded-xl transform transition-all duration-500">
          <h1 className="text-5xl font-semibold mb-6 text-gray-100">
            Your Cart is Empty
          </h1>
          <p className="text-lg mb-8 text-gray-400">
            Explore our products and add items to your cart!
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

export default CartPage;
