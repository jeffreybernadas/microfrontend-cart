export interface IProduct {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    availableQuantity: number;
}
export declare const decrementProductQuantity: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "products/decrementProductQuantity">;
declare const _default: import("@reduxjs/toolkit").Reducer<IProduct[]>;
export default _default;
