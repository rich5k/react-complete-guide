import React from 'react'
import "./Person.css"
const Person=(props)=> {
    return (
        <div className="person">
            <p onClick={props.click}>I'm a {props.name} and I am {Math.floor(Math.random()* 30)} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person
