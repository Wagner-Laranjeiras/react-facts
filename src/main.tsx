import { createRoot, Root } from "react-dom/client";

const root: Root = createRoot(document.querySelector('#root') as HTMLBodyElement);

const MainContent =  () => <h1>React is Great!</h1>

const newHeaderElement = document.createElement('h1');
newHeaderElement.textContent = 'Im a vanilla text within a H1';
newHeaderElement.className = 'new-class'
document.querySelector('#root').appendChild(newHeaderElement)

root.render(
  <>
    <MainContent />
  
  </>
);