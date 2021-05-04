import React, { useState } from 'react'

export default function HelloWord(props) {

    const [change, setChange] = useState("");
    const funChange = () => {
    setChange("(from changed state)");

    }

    return (
        <div>
            <h1>Hello Word! {props.names} {change}</h1>
            <button onClick={funChange} >Presioname</button>
        </div>
    )
}