declare const rootReducer: import("@reduxjs/toolkit").Reducer<{
    products: import("./products/product.slice").IProduct[];
}, import("@reduxjs/toolkit").UnknownAction, Partial<{
    products: import("./products/product.slice").IProduct[] | undefined;
}>>;
export type RootState = ReturnType<typeof rootReducer>;
export declare const createStore: (preloadedState?: Partial<RootState>) => import("@reduxjs/toolkit").EnhancedStore<{
    products: import("./products/product.slice").IProduct[];
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        products: import("./products/product.slice").IProduct[];
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    products: import("./products/product.slice").IProduct[];
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        products: import("./products/product.slice").IProduct[];
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = typeof store.dispatch;
export {};
