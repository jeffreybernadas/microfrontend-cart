export const mfConfig = {
  name: "app_shell",
  filename: "remoteEntry.js",
  remotes: {
    "@core": "core@https://core.thecodebit.digital/remoteEntry.js",
    "@state-management": "state_management@http://localhost:9505/remoteEntry.js",
  },
  exposes: {},
  shared: ["react", "react-dom"],
};
