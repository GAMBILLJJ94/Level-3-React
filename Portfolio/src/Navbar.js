import {useState} from 'react'

export default function Navbar (props){

    function scrollToAbout (e){
        e.preventDefault()
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'})
            console.log("working")
    }

    function scrollToPortfolio (e){
        e.preventDefault()
        window.scrollTo({
            top: 2100,
            behavior: 'smooth'})
            console.log("working")
    }

    function Tohome (e){
        e.preventDefault()
        window.scrollTo({
            top:0,
            behavior: 'smooth'})
            console.log("working")
    }

    return (

        <>
        <div className='navbar--top'>
            <a href='' onClick={Tohome}>Home</a>
            <a href='' onClick={scrollToAbout}>About Me</a>
            <a href='' onClick={scrollToPortfolio} >Portfolio</a>
        </div>
    

        </>
    )
}