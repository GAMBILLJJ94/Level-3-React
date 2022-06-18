import './App.css';
import Colors from './Colors'
import Buttons from './Buttons';
import React from 'react'

function App() {

  const [color, setColor] = React.useState(
    ["white", "white", "white", "white"])

  function djSmall(){
    if (color[0] === "white"){
      setColor(["black","black","black","black"])
    } else if (color[0] !== "white"){
      setColor(["white", "white", "white", "white"])
    }
  }

  function topPurp(){
    setColor(["purple","purple",color,color])
  }

  function leftBlue(){
    setColor([color,color,"blue",color])
  }

  function rightBlue (){
    setColor([color,color,color,"blue"])
  }


// ["white", "white", "white", "white"]
// ["black","black","black","black"]


  return (
    <div className="App">
      <div style={{backgroundColor: color[0]}} className='square1'>1</div>
      <div style={{backgroundColor: color[1]}} className='square2'>2</div>
      <div style={{backgroundColor: color[2]}} className='square3'>3</div>
      <div style={{backgroundColor: color[3]}} className='square4'>4</div>

    <div className='btnDiv'>
    <button onClick={djSmall} className='btn'>DJ Small</button>
    <button onClick={topPurp} className='btn'>Party DJ</button>
    <button onClick={leftBlue} className='btn'>Left Blue</button>
    <button onClick={rightBlue} className='btn'>Right Blue</button>
    <button className='btn'>Big DJ one</button>
    <button className='btn'>Big DJ Two</button>
    <button className='btn'>Big DJ Three</button>
    <button className='btn'>Big DJ Four</button>
    <button className='btn'>Make Noise</button>
    </div>

    {/* <Buttons   /> */}
    </div>
  );
}

export default App;


  