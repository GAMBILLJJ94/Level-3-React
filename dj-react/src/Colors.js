import React from 'react'

export default function Colors(props){
    return (
    <div className='squareParent'>
        <div className='squareDiv1'>
            <div style={props.style0} className='square1'>1</div>
            <div style={props.style1} className='square2'>2</div>
        </div>
        <div className='squareDiv2'>
            <div style={props.style2} className='square3'>3</div>
            <div style={props.style3} className='square4'>4</div>
        </div>
    </div>
    )
}