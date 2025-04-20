export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  exposes: {},
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@state-management": "state_management@http://localhost:9505/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
