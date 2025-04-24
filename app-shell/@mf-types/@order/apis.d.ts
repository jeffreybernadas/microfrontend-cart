
    export type RemoteKeys = '@order/OrderPage';
    type PackageType<T> = T extends '@order/OrderPage' ? typeof import('@order/OrderPage') :any;