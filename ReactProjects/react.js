import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<App />)

import React from "react"
import ReactDOM from "react-dom"



function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Ordered(){
       return ( <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>)
}

function Footer (){
    return (
        <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
    )
}

function H1 (){
    return (
        <h1>Reasons I'm excited to learn React</h1>
    )
}


function Page() {
    return (
        <div>
            <Header />
            <H1 />
            <Ordered />
            <Footer />
        </div>
    )
}


// how to export one function
export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}


// how to export multiple functions

export default Header

// importing on another doc 
import Header from "./Header"

ReactDOM.render(<Page />, document.getElementById("root"))