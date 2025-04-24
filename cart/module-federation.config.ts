export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  exposes: {
    "./CartPage": "./src/pages/CartPage",
    "./useCartCalculations": "./src/hooks/useCartCalculations",
    "./cart.type": "./src/types/cart.type",
  },
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@state-management": "state_management@http://localhost:9505/remoteEntry.js",
  },
  shared: ["react", "react-dom", "react-router"],
};
