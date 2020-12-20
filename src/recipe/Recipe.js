import React from 'react'

export default function Recipe(props) {
    return (
        <div>
        <h1>Title</h1>
    <li>{props.title}</li>
    </div>
    )
}