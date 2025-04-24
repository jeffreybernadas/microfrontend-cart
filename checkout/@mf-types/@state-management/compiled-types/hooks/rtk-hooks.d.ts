import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../features/store";
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export declare const useAppDispatch: import("react-redux").UseDispatch<import("@reduxjs/toolkit").ThunkDispatch<{
    products: import("../features/products/product.slice").IProduct[];
}, undefined, import("@reduxjs/toolkit").UnknownAction> & import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").UnknownAction>>;
