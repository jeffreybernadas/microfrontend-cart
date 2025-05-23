export const mfConfigDev = {
  name: "checkout",
  filename: "remoteEntry.js",
  exposes: {
    "./CheckoutPage": "./src/pages/CheckoutPage",
  },
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@cart": "cart@http://localhost:9502/remoteEntry.js",
    "@state-management": "state_management@http://localhost:9505/remoteEntry.js",
  },
  shared: ["react", "react-dom", "react-router"],
};

export const mfConfigProd = {
  name: "checkout",
  filename: "remoteEntry.js",
  exposes: {
    "./CheckoutPage": "./src/pages/CheckoutPage",
  },
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@cart": "cart@https://core-mfe-cart.vercel.app/remoteEntry.js",
    "@state-management": "state_management@https://core-mfe-states.vercel.app/remoteEntry.js",
  },
  shared: ["react", "react-dom", "react-router"],
};
