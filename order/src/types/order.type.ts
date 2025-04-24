import type { IUserInfo } from "./checkout.type";
import type { IProduct } from "./product.type";
import type { ICartItem } from "./cart.type";

// Mirrors the IOrderItem from order.slice.ts
export interface IOrderItem extends ICartItem {
  product: Pick<IProduct, 'id' | 'name' | 'price' | 'image'>;
}

// Mirrors the IOrder from order.slice.ts
export interface IOrder {
  orderId: string;
  timestamp: number;
  status: "Pending" | "Shipped" | "Delivered";
  totalPrice: number;
  userInfo: IUserInfo;
  items: IOrderItem[];
} 