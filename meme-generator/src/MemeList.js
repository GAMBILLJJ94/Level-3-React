import React from 'react'

export default function MemeList (props){


    function delMeme (e){
        e.preventDefault()
        console.log("attempt to delete")
        props.setMemeList(prevMeme => {
            return [
              ...prevMeme,
              props.meme,
              props.memeHere=false
            ]
            
          })}


    return (
        <div className="MemeListDiv">
        {props.memeHere && <img className='MemeListImg' src={props.randomMeme}/>}
        <h2 className="memeListTextTop">{props.topText}</h2>
        <h2 className="memeListTextBot">{props.bottomText}</h2>
        {props.memeHere && <button className='DelMemeBtn' onClick={delMeme}>Delete Meme</button>}
        </div>
    )
}