
    export type RemoteKeys = '@checkout/CheckoutPage';
    type PackageType<T> = T extends '@checkout/CheckoutPage' ? typeof import('@checkout/CheckoutPage') :any;