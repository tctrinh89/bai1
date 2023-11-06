import {useState} from 'react'

function App() {
  const [number,setNumber]=useState(0)
  const  handleTang =()=>{
    setNumber(number+1)
  }
  const  handleGiam =()=>{
    setNumber(number-1)
  }
  const  handleReset =()=>{
    setNumber(0)
  }
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={handleTang}>Tang</button>
      <button onClick={handleGiam}>Giam</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
