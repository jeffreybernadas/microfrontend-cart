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

declare module "@state-management/store" {
  export type RootState = {
    products: {
      id: string;
      name: string;
      price: number;
      image: string;
      description: string;
      availableQuantity: number;
    }[];
    cart: {
      items: {
        productId: string;
        quantity: number;
      }[];
    };
    checkout: {
      userInfo: IUserInfo;
    };
  };
}
