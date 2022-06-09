import React from 'react'

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <h1>{props.item.title}</h1>
            <h4>{props.item.subtitle}</h4>
        </div>
    )
}