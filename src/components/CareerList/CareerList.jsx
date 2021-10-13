import React from 'react';
import "./CareerList.css";

export default function CareerList({index, id, name, active, setSelected}) {
    return (
        <li key={index} className={active ? "careerList active" : "careerList"} onClick={() => setSelected(id)}>{name}</li>
    )
}