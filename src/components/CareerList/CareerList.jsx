import React from 'react';
import "./CareerList.css";

export default function CareerList({id, name, active, setSelected}) {
    return (
        <li className={active ? "careerList active" : "careerList"} onClick={() => setSelected(id)}>{name}</li>
    )
}
