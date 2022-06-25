import react from 'react'

export default function Badge(props){

   
    return(
        <div className='container'>
            <header className='header'>Badge:</header>
            <p className='Text'>Name: {props.firstName} {props.lastName}</p>
            <p className='Text'>Phone Number: {props.phone}</p>
            <p className='Text'>Place of Birth: {props.birth}</p>
            <p className='Text'>Fav Food: {props.favFood}</p>
            <p className='Text'>Email: {props.email}</p>
            <span className='box'> {props.comments} </span>
        </div>
    )
}