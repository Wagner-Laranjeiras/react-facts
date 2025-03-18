import './App.css'

function App() {
const newHeaderElement = document.createElement('h1');
newHeaderElement.textContent = 'Im a vanilla text within a H1';
newHeaderElement.className = 'new-class'
document.getElementById('root').appendChild(newHeaderElement)

  return (
    <>
      
    </>
  )
}

export default App
