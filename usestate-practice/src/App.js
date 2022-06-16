import React from 'react'
import './App.css';

function App() {

  const [color, setColor] = React.useState("blue")

  function changeClr(){
    if (color === "blue"){
    setColor("pink")
  } else if (color === "pink"){
      setColor("blue")
    }
  }


  return (
    <div className="App">
      <div>
        <button onClick={changeClr} className='colorButton'>Change Color</button>
        <h1 className='Box'>{color}</h1>

      </div>
    </div>
  );
}

export default App;
