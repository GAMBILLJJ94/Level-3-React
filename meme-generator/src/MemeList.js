import React from 'react'

export default function MemeList (props){

    return ( 
        <div className="MemeListDiv">
        {props.memeHere && <img className='MemeListImg' src={props.randomMeme}/>}
        <h2 className="memeListTextTop">{props.topText}</h2>
        <h2 className="memeListTextBot">{props.bottomText}</h2>
        <div className='buttons'>
        {props.memeHere && <button className='DelMemeBtn' onClick={props.onDelete}>Delete</button>}
        {props.memeHere && <button className='EditMemeBtn' onClick={props.editMeme}>Edit</button>}
        </div>
        </div>
        
    )
}