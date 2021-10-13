import React from 'react'
import {useState, useEffect, useCallback} from 'react';
import CareerList from '../CareerList/CareerList';
import "./Career.css";
import { proj_feat, proj_pers, proj_acad, exp_it, exp_swe, education, lang } from "../../data"
import ExpList from '../ExpList/ExpList';

const expPerPage = 4;

export default function Career() {

    // CareerList hooks & states
    const [selectedProject, setSelectedProject] = useState("featured");
    const [selectedExperience, setSelectedExperience] = useState("all");
    const [projectData, setProjectData] = useState(proj_feat);
    const [expData, setExpData] = useState([]);

    // yes
    const [expToShow, setExpToShow] = useState([]);
    const [next, setNext] = useState(0);

    const showNext = (reset) => {
        let after = next + expPerPage;
        console.log(next + " " + after)
        setExpToShow(projectData.slice(next, after));
        if (reset) {
            setNext(0);
        }
        else {
            setNext(after);
        }
    };

    const handleShowMoreExp = () => {
        if (!(next + expPerPage > projectData.length)) {
            showNext(false);
        }
        else if(next >= projectData.length) {
            setNext(0);
        }
        else {
            showNext(true);
        }
        
    }

    const projectsList = [
        {
            id: "all",
            name: "All"
        },
        {
            id: "featured",
            name: "Featured"
        },
        {
            id: "academic",
            name: "Academic"
        },
        {
            id: "personal",
            name: "Personal"
        }
    ]

    const experienceList = [
        {
            id: "all",
            name: "All"
        },
        {
            id: "swe",
            name: "Software Engineering"
        },
        {
            id: "it",
            name: "IT"
        }
    ]

    useEffect(() => {
        switch(selectedExperience) {
            case "swe":
                setExpData(exp_swe);
                break;
            case "it":
                setExpData(exp_it);
                break;
            default:
                setExpData(exp_swe.concat(exp_it));
                break;
        }
    }, [selectedExperience])

    useEffect(() => {
        switch(selectedProject) {
            case "featured":
                setProjectData(proj_feat);
                break;
            case "academic":
                setProjectData(proj_acad);
                break;
            case "personal":
                setProjectData(proj_pers);
                break;
            default:
                setProjectData(proj_pers.concat(proj_acad));
                break;
        }
    }, [selectedProject])

    useEffect(() => {
        setExpToShow(projectData.slice(0, 4));
        setNext(4);
    }, [projectData])

    return (
        <div className="career" id="career">
            <h1>Career</h1>
            <div className="container">
                <div className="left">
                    <h2 className="title">Projects</h2>
                    <ul>
                        {projectsList.map((item, index)=>(
                            <CareerList index={index} key={item.id} id={item.id} name={item.name} active={selectedProject === item.id} setSelected={setSelectedProject}></CareerList>
                        ))}
                    </ul>
                    <div className="career-items">
                        {expToShow.map((item) => (
                            <div key={item.uid} className="item"> 
                                <a href={item.link} target="_blank"><img src={item.img} alt={item.desc}></img></a>
                                <div className="overlay">
                                    <h3 id="name">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleShowMoreExp}>Next Page</button>
                </div>
                <div className="right">
                    <h2 className="title">Experience</h2>
                    <ul>
                        {experienceList.map((item, index)=>(
                            <CareerList index={index} key={item.id} id={item.id} name={item.name} active={selectedExperience === item.id} setSelected={setSelectedExperience}></CareerList>
                        ))}
                    </ul>
                    <div className="career-items">
                        {expData.map((d) => (
                            <div key={d.id} className="item"> 
                                <a href={d.link} target="_blank"><img src={d.img} alt={d.desc}></img></a>
                                <div className="overlay">
                                    <h3 id="name">{d.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
