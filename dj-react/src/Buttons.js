import React from 'react'

export default function Buttons(props) {

    
    return (<div className='btnDiv'>
    <button onClick={props.handle} className='btn'>DJ Small</button>
    <button onClick={props.handle} className='btn'>Party DJ</button>
    <button onClick={props.handle} className='btn'>Left Blue</button>
    <button onClick={props.handle} className='btn'>Right Blue</button>
    <button onClick={props.handle} className='btn'>Big DJ one</button>
    <button onClick={props.handle} className='btn'>Big DJ Two</button>
    <button onClick={props.handle} className='btn'>Big DJ Three</button>
    <button onClick={props.handle} className='btn'>Big DJ Four</button>
    <button onClick={props.handle} className='btn'>Make Noise</button>
    </div>);
  }