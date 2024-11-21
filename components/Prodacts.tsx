"use client";
import React, { useState, useEffect } from "react";
import { tshirts } from "@/constants";
import { CartItem } from "@/constants";
import { Productinfo, ShowProdacts } from "@/components";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CartItem>(
    tshirts.T_shirts[0]
  );
  const [visibleCount, setVisibleCount] = useState(4);
  const [visibleCount1, setVisibleCount1] = useState(4);
  const [visibleCount2, setVisibleCount2] = useState(4);
  



  return (
    <>
      <div className="w-full flex flex-col items-center gap-3 py-20" id="shop">
        <ShowProdacts
          ProdactName="T_shirts"
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
          setSelectedProduct={setSelectedProduct}
          setIsOpen={setIsOpen}
        />
        <ShowProdacts
          ProdactName="Hoodies"
          visibleCount={visibleCount1}
          setVisibleCount={setVisibleCount1}
          setSelectedProduct={setSelectedProduct}
          setIsOpen={setIsOpen}
  
        />
        <ShowProdacts
          ProdactName="Pants"
          visibleCount={visibleCount2}
          setVisibleCount={setVisibleCount2}
          setSelectedProduct={setSelectedProduct}
          setIsOpen={setIsOpen}
  
        />

        <Productinfo
          selectedProduct={selectedProduct}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        
      </div>
    </>
  );
};

export default Products;
