export const mfConfig = {
  name: "state_management",
  filename: "remoteEntry.js",
  exposes: {
    "./store": "./src/features/store.ts",
    "./ReduxProvider": "./src/features/Provider.tsx",
    "./rtk-hooks": "./src/hooks/rtk-hooks.ts",
    "./product-slice": "./src/features/products/product.slice.ts",
    "./cart-slice": "./src/features/cart/cart.slice.ts",
    "./checkout-slice": "./src/features/checkout/checkout.slice.ts",
  },
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@app-shell": "app_shell@http://localhost:9500/remoteEntry.js",
  },
  shared: ["react", "react-dom", "@reduxjs/toolkit", "react-redux"],
};
