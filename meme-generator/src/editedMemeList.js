import React from 'react'

export default function EditedMemeList (props){

    return ( 
        <div className="MemeListDiv">
        <img className='MemeListImg' src={props.randomMeme}/>
        <h2 className="memeListTextTop">{props.editTopText}</h2>
        <h2 className="memeListTextBot">{props.editBottomText}</h2>
        <div className='buttons'>
        {props.memeHere && <button className='DelMemeBtn' onClick={props.onDelete}>Delete</button>}

        </div>
        </div>
        
    )
}