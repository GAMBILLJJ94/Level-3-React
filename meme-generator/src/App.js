import './App.css';
import MemeList from './MemeList'
import React from 'react'



function App() {



<<<<<<< HEAD
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
            console.log(allMemes)
        

  }


  //this function allows the new meme to randomize then populate, replacing the old meme
  function getMeme() {
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const {id} = allMemes[randomNum]
    const {url} = allMemes[randomNum]
    console.log(url)
    console.log(id)
    setMeme(a => ({
      ...a,
      randomMeme: url,
      memeHere:true,
      memeId:id
    }))
  }


//state for both top and bottom meme text
function AddText (event){
    const {name, value} = event.target
    setMeme(prevText => {
        return {
            ...prevText,
            [name]: value
        }
    })
}


//Meme list useState below add meme button
const [memeList, setMemeList] = React.useState([{
    topText:"",
    bottomText:"",
    randomMeme:"",
    id:meme.memeId,
    memeHere:false
}])

//function on button click adds meme to that list
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

  }

  

//Del meme filter index for deleting meme on click of delete button
const delMeme = (index) => setMemeList(prevList => prevList.filter((_, i) => i !== index))

// const newList = memeList.map((it, index) => {
//     return (
//       <div key={it.id}>
//         {it.name} {meme.memeHere  && <button onClick={delMeme(index)}>delete</button>}
//       </div>
//     );
//   })

function handleInputChange (event){
  const target = event.target
  const value = target.value
  const name = target.name

  setMemeList({
    ...memeList,
    [name]: value
  })

}

const [newText, setNewText] = React.useState()

function editMeme (){
  return (
    <form>
      <input value={this.state.topText} onChange={handleInputChange} name="inputs" type="text" placeholder='New Top Text'></input>
      <input value={this.state.bottomText} onChange={handleInputChange} name="inputs" type="text" placeholder='New Bottom Text'></input>
      <button>Save New </button>
    </form>
  )
}


const memesListElements = memeList.map((meme,index) => {
    return <MemeList key = {index} {...meme} onEdit={() => editMeme(index)} onDelete={() => delMeme(index)}/>})
    
=======
  //meme array for posting original meme from api
  const [meme, setMeme] = React.useState({
      topText:"",
      bottomText:"",
      randomMeme:"",
      memeHere: false,
      
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
              console.log(allMemes)
          

    }

  //this function allows the new meme to randomize then populate, replacing the old meme
  function getMeme() {
      const randomNum = Math.floor(Math.random() * allMemes.length)
      const {id} = allMemes[randomNum]
      const {url} = allMemes[randomNum]
      console.log(url)
      console.log(id)
      setMeme(a => ({
        ...a,
        randomMeme: url,
        memeHere:true,
        memeId:id
      }))
    }

  //state for both top and bottom meme text
  function AddText (event){
      const {name, value} = event.target
      setMeme(prevText => {
          return {
              ...prevText,
              [name]: value
          }
      })
  }

  //Meme list useState below add meme button
  const [memeList, setMemeList] = React.useState([{
      topText:"",
      bottomText:"",
      randomMeme:"",
      id:allMemes.id,
      memeHere:false
  }])

  //function on button click adds meme to that list
  function memeToList(event){
      event.preventDefault()
      const {name, value} = event.target
      console.log(meme.randomMeme)
      setMemeList(prevMeme => {
        return [
          ...prevMeme,
          meme
        ]
      })
    }

  //Del meme filter index for deleting meme on click of delete button
  const delMeme = (index) => setMemeList(memeList.filter((_, i) => i !== index))


  const memesListElements = memeList.map((meme,index) => {
    return <MemeList key = {index} {...meme} onDelete={() => delMeme(index)}/>})
>>>>>>> adding

  return (
    //Header/navbar area
    <div className="App">
      <header className="Navbar">
        <div className='memeGen'><img className="meme" src="https://pngimg.com/uploads/trollface/trollface_PNG12.png"></img>
        <h1> Meme Generator</h1>
        </div>
        <h3>React Course - Project 3</h3>
      </header>

        {/* top text input box */}
      <form className='inputBoxes'>
        <input 
        className='inputs' 
        placeholder='Top Text'
        name='topText'
        onChange={AddText}
        >
        {/* bottom text input box */}
        </input>
        <input 
        className='inputs' 
        placeholder='Bottom Text'
        name='bottomText'
        onChange={AddText}
        >
        </input>
      </form>

      {/* Meme button, the button to generate new memes from API */}
      <div className='meme-button-div'>
        <button className='Btn' onClick={getMeme}>Get a new meme image 🖼</button>
      </div>

      {/* Div for where the meme sits after API call and meme generation */}
      <div className="memeDiv">
        {meme.memeHere && <img className='MemeImg' src={meme.randomMeme}/>}
        {meme.memeHere && <h2 className="memeTextTop">{meme.topText}</h2>}
        {meme.memeHere && <h2 className="memeTextBot">{meme.bottomText}</h2>}
      </div>

      {/* Button div for adding meme to that memeList array */}
      <div className='save-meme-button-div'>
        <button className='Btn' onClick={memeToList} >Add Meme To Your List 🖼</button>
      </div>
      
      {/* Delete meme button div, still working out placement of delete button */}
        {meme.memeHere && <div>{memesListElements}</div>}
        
  </div>    
  );
}

export default App;
