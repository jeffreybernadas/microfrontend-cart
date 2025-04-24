declare module "@core/components";
declare module "@core/components/shadcn";
declare module "@core/themes/shadcn";
declare module "@core/hooks";
declare module "@core/lib";
declare module "@state-management/ReduxProvider";
declare module "@state-management/rtk-hooks";
declare module "@state-management/product-slice";
declare module "@state-management/cart-slice";
declare module "@state-management/checkout-slice";
declare module "@state-management/order-slice";

declare module "@state-management/store" {
    interface IUserInfo {
      name: string;
      email: string;
      address: string;
    }
    interface IProduct {
        id: string;
        name: string;
        price: number;
        image: string;
        description: string;
        availableQuantity: number;
    }
    interface ICartItem {
        productId: string;
        quantity: number;
    }
    interface IOrderItem extends ICartItem {
        product: Pick<IProduct, 'id' | 'name' | 'price' | 'image'>;
    }
    interface IOrder {
        orderId: string;
        timestamp: number;
        status: "Pending" | "Shipped" | "Delivered";
        totalPrice: number;
        userInfo: IUserInfo;
        items: IOrderItem[];
    }
  
    export type RootState = {
      products: IProduct[];
      cart: {
        items: ICartItem[];
      };
      checkout: {
        userInfo: IUserInfo;
      };
      orders: {
        orders: IOrder[];
      };
    };
  }
  