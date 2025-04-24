import { useMemo } from "react";
import { useAppSelector } from "@state-management/rtk-hooks";
import type { RootState } from "@state-management/store";
import type { ICartItem } from "../types/cart.type";
import type { IProduct } from "../types/product.type";

type CartCalculations = {
  itemsWithDetails: (ICartItem & { product: IProduct })[];
  totalPrice: number;
};

type CartItemWithDetails = ICartItem & { product: IProduct };

export const useCartCalculations = (): CartCalculations => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const products = useAppSelector((state: RootState) => state.products);

  const itemsWithDetails: CartItemWithDetails[] = useMemo(() => {
    return cartItems
      .map((item: ICartItem) => {
        const product = products.find((p: IProduct) => p.id === item.productId);
        return product ? { ...item, product: { ...product } } : null;
      })
      .filter(
        (item: CartItemWithDetails | null): item is CartItemWithDetails =>
          item !== null
      );
  }, [cartItems, products]);

  const totalPrice = useMemo(() => {
    return itemsWithDetails.reduce(
      (total: number, item: CartItemWithDetails) =>
        total + item.product.price * item.quantity,
      0
    );
  }, [itemsWithDetails]);

  return { itemsWithDetails, totalPrice };
};
