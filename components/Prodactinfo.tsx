"use client";
import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { CartItem } from "@/constants";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { addToCart } from "@/store/Cartslice";
import { addToWish } from "@/store/Wishslice";
interface ProdactinfoProps {
  selectedProduct: CartItem;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const Prodactinfo: React.FC<ProdactinfoProps> = ({
  selectedProduct,
  isOpen,
  setIsOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.items);
  const wish = useSelector((state: RootState) => state.wish.items);
  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };
  const handleAddWish = (item: CartItem) => {
    dispatch(addToWish(item));
  };
  return (
    <div>
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

export default Prodactinfo;
