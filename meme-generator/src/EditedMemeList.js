import React from 'react'

export default function EditedMemeList (props){

    return ( 
        <div className="MemeListDiv">
        {props.memeHere && <img className='MemeListImg' src={props.randomMeme}/>}
        <h2 className="memeListTextTop">{props.topText}</h2>
        <h2 className="memeListTextBot">{props.bottomText}</h2>
        <div className='buttons'>
        {props.memeHere && <button className='DelMemeBtn' onClick={props.onDelete}>Delete</button>}

        {props.memeHere && (isEditing === false  ? <button className='EditMemeBtn' onClick={() => setIsEditing(!isEditing)} >Edit</button> : <button className='EditMemeBtn' onClick={saveMemeEdits} >save</button>)}

        </div>
        </div>
        
    )
}