import React from 'react'

function Person(props) {
    return (
        <div className="person">
            <p>I'm a {props.name} and I am {Math.floor(Math.random()* 30)} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person
