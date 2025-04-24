export const mfConfigDev = {
  name: "products",
  filename: "remoteEntry.js",
  exposes: {
    "./Products": "./src/components/Products",
    "./ProductCard": "./src/components/ProductCard",
    "./product.type": "./src/types/product.type",
  },
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@state-management": "state_management@http://localhost:9505/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};

export const mfConfigProd = {
  name: "products",
  filename: "remoteEntry.js",
  exposes: {
    "./Products": "./src/components/Products",
    "./ProductCard": "./src/components/ProductCard",
    "./product.type": "./src/types/product.type",
  },
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@state-management": "state_management@https://core-mfe-states.vercel.app/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
