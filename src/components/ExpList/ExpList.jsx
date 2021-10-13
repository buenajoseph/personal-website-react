import React from 'react'

export default function ExpList({expsToShow}) {
    return (
        <div className="con">
                {expsToShow.map((d, index) => (
                    <li key={index} className="item" > 
                        <a href={d.link}><img src={d.img} alt={d.desc}></img></a>
                        <div className="overlay">
                            <h3 id="name">{d.title}</h3>
                        </div>
                    </li>
                ))}
            
        </div>
    )
}
