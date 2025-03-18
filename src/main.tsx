import { createRoot, Root } from "react-dom/client";
import App from "./App";

const root: Root = createRoot(document.querySelector('#root') as HTMLBodyElement);
root.render(
  <App />
);