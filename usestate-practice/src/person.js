import React from 'react'
import './person.css';

function Person (){
    const [people, setPeople] = React.useState([
        {
            firstName: "John",
            lastName: "Smith"
        }
    ])
    
}


export default Person;