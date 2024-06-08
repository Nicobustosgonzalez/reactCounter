import { useState } from 'react'


import './App.css'

const App = () => {
  
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
      setCounter(counter + 1);
  };
  const handleClick2 = () => {
      setCounter(counter - 1);
      if (counter === 0) {
        setCounter(0);
      }
  };
  const handleClick3 = () => {
    setCounter(0);
  };
 return (
  
  <div id= "buttonContainer">
     <h1>Contador</h1>
    <h2> {counter} </h2>

    <button type="button" class="btn-1" onClick={handleClick2}> -1 </button>
    <button type="button" class="btn-1" onClick={handleClick3}>Reset</button>
    <button type="button" class="btn-1"onClick={handleClick1}> +1 </button>
  </div>
  )
}
export default App
