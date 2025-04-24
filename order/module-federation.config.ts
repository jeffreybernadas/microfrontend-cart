export const mfConfig = {
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
