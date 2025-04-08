import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "@core/themes/shadcn";
import router from "./router";
import { Provider as ReduxProvider } from "@state-management/ReduxProvider";

import "@core/styles";
import "./index.css";

const App = () => (
  <ReduxProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ReduxProvider>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
