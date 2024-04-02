import React from "react";
import { IoPlay } from "react-icons/io5";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../product.css";
import ProductPopDetail from "./ProductPopDetail/ProductPopDetail";
import ProductTypes from "./ProductPopDetail/ProductTypes";

const ProductPop = ({product}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IoPlay />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlays" />
        <Dialog.Content className="DialogContents">
          <ProductPopDetail product={product}/>
          <div className="p-3">
          <ProductTypes />

          <div className="rounded-xl bg-anova2 px-3 py-2 my-8">
            <span className="text-white">About</span>
            <p className="mt-1 text-xs md:text-sm">
              {product.description}
            </p>
          </div>

          <div className="mt-4 my-10">
            <span className="text-white">Steps</span>
            <ul className="steps-main mt-2 text-xs md:text-sm px-4">
             {product.steps.map((item,index)=>{
              return <li key={index}>{item}</li>
             })}
            </ul>
          </div>

          <div style={{  }}>
            <Dialog.Close asChild>
              <button className="Buttons green mb-2">Start Now</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButtons" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProductPop;
