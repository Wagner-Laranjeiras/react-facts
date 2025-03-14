import { createRoot, Root } from "react-dom/client";

const root: Root = createRoot(document.querySelector('#root') as HTMLBodyElement);

root.render(
  <ul>
    <li>I will feel more confident with my coding skills.</li>
    <li>It's semms really good to get a job.</li>
    <li>I'm building an app with React.</li>
  </ul>
);