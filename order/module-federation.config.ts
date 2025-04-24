export const mfConfigDev = {
  name: "order",
  filename: "remoteEntry.js",
  exposes: {
    "./OrderPage": "./src/pages/OrderPage",
  },
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@state-management": "state_management@http://localhost:9505/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};

export const mfConfigProd = {
  name: "order",
  filename: "remoteEntry.js",
  exposes: {
    "./OrderPage": "./src/pages/OrderPage",
  },
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@state-management": "state_management@https://core-mfe-states.vercel.app/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
