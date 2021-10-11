import React from 'react'
import {useState, useEffect} from 'react';
import CareerList from '../CareerList/CareerList';
import "./Career.css";

import { featWorks, edu, proj, exp } from "../../data"

export default function Career() {

    const [selected, setSelected] = useState("top");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "top",
            name: "Featured"
        },
        {
            id: "education",
            name: "Education"
        },
        {
            id: "projects",
            name: "Projects"
        },
        {
            id: "experience",
            name: "Experience"
        }
    ]

    useEffect(() => {
        switch(selected) {
            case "top":
                setData(featWorks);
                break;
            case "education":
                setData(edu);
                break;
            case "projects":
                setData(proj);
                break;
            case "experience":
                setData(exp);
                break;
            default:
                setData(featWorks);
                break;
            
        }
    })


    return (
        <div className="career" id="career">
            <h1>Career</h1>
            <ul>
                {list.map(item=>(
                    <CareerList id={item.id} name={item.name} active={selected === item.id} setSelected={setSelected}></CareerList>
                ))}
            </ul>
            <div className="career-items">
                {data.map((d) => (
                <div className="item"> 
                    <a href={d.link} target="_blank"><img src={d.img} alt={d.desc}></img></a>
                    <h3 id="name" className="sitem active ">{d.name}</h3>
                    <h4 id="desc" className="sitem active">{d.desc}</h4>
                    <h5 id="desc2" className="sitem active">{d.desc2}</h5>
                    <p id="tech">{d.tech}</p>
                    
                </div>
                ))}
            </div>
        </div>
    )
}
