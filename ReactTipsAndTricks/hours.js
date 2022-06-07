import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const hours = date.getHours() % 12
    
    return (
        <h1>It is currently about {hours} o'clock!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    return (
        <h1>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

import React from "react"

export default function Joke(props) {
    return (
        <div>

            {/* if statement using react below, placeing inside of curly braces like such only renders if both are present or both are "true" */}
            {props.setup && <h3>Setup: {props.setup}</h3>}

            {/* Or by using ES6 if else statements like below */}
            <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>


            
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}