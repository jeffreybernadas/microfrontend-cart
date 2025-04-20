import React from "react";
import { useAppSelector, useAppDispatch } from "@state-management/rtk-hooks";
import type { RootState } from "@state-management/store";
import ProductCard from "../components/ProductCard";
import { addItemToCart } from "@state-management/cart-slice";
import type { IProduct } from "../types/product.type";

const Main = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: RootState) => state.products);
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleAddToCart = (productId: string) => {
    dispatch(addItemToCart(productId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
