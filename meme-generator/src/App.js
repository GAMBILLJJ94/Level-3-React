import './App.css';
import data from './data'
import Meme from './Meme'
import React from 'react'



function App() {


  function getMeme() {
    
    const memeArray = data.data.memes
    const randomNum = Math.floor(Math.random() * memeArray.length)
    const {url} = memeArray[randomNum]
    console.log(url)
    const newMemeUrl = memeArray.map(a => <img>${url}</img>)
    const newImg = document.createElement("h1")
    const memeDiv = document.getElementsByClassName("MemeImgDiv")
    newImg.textContent = url
    
  }
  
  return (
    <div className="App">
      <header className="Navbar">
        <div className='memeGen'><img className="meme" src="https://pngimg.com/uploads/trollface/trollface_PNG12.png"></img>
        <h1> Meme Generator</h1></div>
        
        <h3>React Course - Project 3</h3>
      </header>
      <form className='inputBoxes'>
      <input className='inputs' placeholder='Top Text'></input>
      <input className='inputs' placeholder='Bottom Text'></input>
      </form>
      <div className='meme-button-div'>
        <button className='Btn' onClick={getMeme}>Get a new meme image 🖼</button>
        
      </div>
      <div className='MemeImgDiv'><img className='MemeImg'></img></div>
    </div>
  );
}

export default App;
