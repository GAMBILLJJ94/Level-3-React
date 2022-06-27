import './App.css';
import Meme from './Meme'
import React from 'react'



function App() {

const [meme, setMeme] = React.useState({
  topText:"",
  bottomText:"",
  randomMeme:"https://pngimg.com/uploads/trollface/trollface_PNG12.png"
})

const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


  function getMeme() {
    // const memeArray = allMemes
    const randomNum = Math.floor(Math.random() * allMemes.length)
    // setMeme(memeArray[randomNum].url)
    const {url} = allMemes[randomNum]
    console.log(url)
    setMeme(a => ({
      ...a,
      randomMeme: url
    }))
  }

 const [memeText, setMemeText] = React.useState({
    topText:"",
    bottomText:""
})

  function AddText (event){
    const {name, value} = event.target
    setMemeText(prevText => {
        return {
            ...prevText,
            [name]: value
        }
    })
}


   
  return (
    <div className="App">
      <header className="Navbar">
        <div className='memeGen'><img className="meme" src="https://pngimg.com/uploads/trollface/trollface_PNG12.png"></img>
        <h1> Meme Generator</h1>
        </div>
        <h3>React Course - Project 3</h3>
      </header>

      <form className='inputBoxes'>
        <input 
        className='inputs' 
        placeholder='Top Text'
        name='topText'
        onChange={AddText}
        >
        
        </input>
        <input 
        className='inputs' 
        placeholder='Bottom Text'
        name='bottomText'
        onChange={AddText}
        >
        </input>
      </form>

      <div className='meme-button-div'>
        <button className='Btn' onClick={getMeme}>Get a new meme image 🖼</button>
      </div>

      <div className="memeDiv">
        <img className='MemeImg' src={meme.randomMeme}/>
        <h2 className="memeTextTop">{memeText.topText}</h2>
        <h2 className="memeTextBot">{memeText.bottomText}</h2>
      </div>
        

  </div>    
  );
}

export default App;
