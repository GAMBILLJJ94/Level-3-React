import React, { useState, useEffect } from 'react';

export default function Colors(props) {
    const [colorData, setColorData] = React.useState({})
    const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     console.log("counted, use effect ran")
//     document.title = `You clicked ${count} times`;
//   }, [count]);

  let randomNum = Math.floor(Math.random()*83)+1
    React.useEffect(function() {
        console.log(randomNum)
        fetch(`https://www.colr.org/json/color/random?timestamp=
        ${new Date().getTime()}`)
            .then(res => res.json())
            .then(data => setColorData(data.colors[0].hex))
            console.log(`#${colorData}`)
    }, [count])

  return (
    <div >
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p  className='ColorBox' style={{backgroundColor:`#${colorData}`}}></p>

    </div>
  );
}
