import React from 'react'
import {createRoot} from 'react-dom/client'
import Info from './Info'
import Footer from './Footer'
import Body from '/Body'

function Header (){
    return <div>
            <Info/>
            <Body/>
            <Footer/>
            </div>
}
const container = document.getElementById("root")
const root = createRoot(container)

root.render(<Header/>)