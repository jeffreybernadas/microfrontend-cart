import ReactDOM from "react-dom/client";
import { Button } from "@core/components/shadcn";

import "@core/styles";
import "./index.css";

const App = () => (
  <div className="mx-auto min-h-screen max-w-[750px] px-4 sm:px-6 lg:px-8 flex flex-col gap-4 items-center mt-10">
    <h1 className="text-3xl font-bold text-center">What is this?</h1>
    <h2 className="text-xl font-bold text-center">
      Core Shop's State Management is running under the hood
    </h2>
    {/* TODO: Update this once the app-shell is deployed */}
    <Button
      className="w-full"
      onClick={() => window.open("http://localhost:9500/", "_blank")}
    >
      Go to Core Shop
    </Button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
