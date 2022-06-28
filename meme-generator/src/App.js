import './App.css';
import MemeList from './MemeList'
import React from 'react'



function App() {



   //meme array for posting original meme from api
const [meme, setMeme] = React.useState({
  topText:"",
  bottomText:"",
  randomMeme:"",
  memeHere: false
})   


//array of all memes from api
const [allMemes, setAllMemes] = React.useState([{
  topText:meme.topText,
  bottomText:meme.bottomText,
  randomMeme:meme.randomMeme,
  id:meme.id,
  memeHere:false
}])




    React.useEffect(() => {
        getData()
    }, [])

    //function getting data from api, data being the meme images
  async function getData (){
    await fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        // return () => {
        // }

  }


  //this function allows the new meme to randomize then populate, replacing the old meme
  function getMeme() {
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const {url} = allMemes[randomNum]
    console.log(url)
    setMeme(a => ({
      ...a,
      randomMeme: url,
      memeHere:true,
    }))
  }


//state for both top and bottom meme text
 const [memeText, setMemeText] = React.useState([])

  function AddText (event){
    const {name, value} = event.target
    setMeme(prevText => {
        return {
            ...prevText,
            [name]: value
        }
    })
}

  const [memeList, setMemeList] = React.useState([{
    topText:"",
    bottomText:"",
    randomMeme:"",
    id:"",
    memeHere:false
}])

  function memeToList(event){
    event.preventDefault()
    const {name, value} = event.target
    console.log("attempted to add meme to list")
    console.log(meme.randomMeme)
    setMemeList(prevMeme => {
      return [
        ...prevMeme,
        meme
      ]
    })
    // setMeme(meme)
    console.log(memeList)

  }
  function DelMemeBtn (e){
        e.preventDefault()
        console.log("delete this meme")
        // setMemeList(prevMeme => {
        //   return [
        //     ...prevMeme,
        //     memeList.memeHere=false
        //   ]
        // })
    }
  const memesListElements = memeList.map((meme, index) => {
    return <MemeList key = {index} {...meme} /> })

  
  

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
        {meme.memeHere && <img className='MemeImg' src={meme.randomMeme}/>}
        {meme.memeHere && <h2 className="memeTextTop">{meme.topText}</h2>}
        {meme.memeHere && <h2 className="memeTextBot">{meme.bottomText}</h2>}
      </div>

      <div className='save-meme-button-div'>
        <button className='Btn' onClick={memeToList} >Add Meme To Your List 🖼</button>
      </div>
      
      <div className='DelMemeBtn' >
        {meme.memeHere && <div>{memesListElements}</div>}
        
      </div>
        
  </div>    
  );
}

export default App;
