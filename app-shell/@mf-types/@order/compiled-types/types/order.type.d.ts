import type { IUserInfo } from "./checkout.type";
import type { IProduct } from "./product.type";
import type { ICartItem } from "./cart.type";
export interface IOrderItem extends ICartItem {
    product: Pick<IProduct, 'id' | 'name' | 'price' | 'image'>;
}
export interface IOrder {
    orderId: string;
    timestamp: number;
    status: "Pending" | "Shipped" | "Delivered";
    totalPrice: number;
    userInfo: IUserInfo;
    items: IOrderItem[];
}
