export const mfConfigDev = {
  name: "app_shell",
  filename: "remoteEntry.js",
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@products": "products@http://localhost:9501/remoteEntry.js",
    "@cart": "cart@http://localhost:9502/remoteEntry.js",
    "@checkout": "checkout@http://localhost:9503/remoteEntry.js",
    "@order": "order@http://localhost:9504/remoteEntry.js",
    "@state-management": "state_management@http://localhost:9505/remoteEntry.js",
  },
  exposes: {
    "./Navbar": "./src/components/Navbar",
  },
  shared: ["react", "react-dom", "react-router"],
};

export const mfConfigProd = {
  name: "app_shell",
  filename: "remoteEntry.js",
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@products": "products@https://core-mfe-products.vercel.app/remoteEntry.js",
    "@cart": "cart@https://core-mfe-cart.vercel.app/remoteEntry.js",
    "@checkout": "checkout@https://core-mfe-checkout.vercel.app/remoteEntry.js",
    "@order": "order@https://core-mfe-order.vercel.app/remoteEntry.js",
    "@state-management": "state_management@https://core-mfe-states.vercel.app/remoteEntry.js",
  },
  exposes: {
    "./Navbar": "./src/components/Navbar",
  },
  shared: ["react", "react-dom", "react-router"],
};
