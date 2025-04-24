
    export type RemoteKeys = '@app-shell/Navbar';
    type PackageType<T> = T extends '@app-shell/Navbar' ? typeof import('@app-shell/Navbar') :any;