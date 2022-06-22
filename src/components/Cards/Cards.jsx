import React from "react";
import './cards.css'

export default function Cards(props) {
    return (
        <div className="cards">
            <img width={50} src={props.icon} alt="" />

            <h2>{props.title}</h2>

            <p>{props.desc}</p>
        </div>
    )
}

