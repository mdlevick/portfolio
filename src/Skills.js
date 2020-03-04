import React from 'react';
import code from "./img/markus-spiske.jpg";
import {Link} from "react-router-dom";


export default function Skills () {
const skills = ["HTML", "CSS/LESS", "Responsive Web Design", "React", "Redux", "Git Flow", "JavaScript", "Node.js", "Express", "Sessions", "JWT", "Stylizing Dependencies"  ]
    return(
        <div id="skillsTab">
        <Link to={`/`}><div className="closeButton" ><h3>X</h3></div></Link>

        <div className="mainSkills">
            <div className="TNI">
            <h3>Skills</h3>
            <img src={code} alt="code." />
            <p>I learned these skills from self study and through Lambda Schools Web Development path</p>
            </div>

        {skills.map(skill => 
            <div className="skill">{skill}</div>
            )}


        </div>

    </div>
    )
}