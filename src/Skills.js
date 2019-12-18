import React from 'react';
import code from "./img/markus-spiske.jpg";
import {Link} from "react-router-dom";


export default function Skills () {

    return(
        <div id="skillsTab">
        <Link to={`/`}><div className="closeButton" ><h3>X</h3></div></Link>

        <div className="mainSkills">
            <div className="TNI">
            <h3>Skills</h3>
            <img src={code} alt="code." />
            <p>I learned these skills from self study and through Lambda Schools Web Development path</p>
            </div>

            <div className="skill"><p>HTML</p></div>
            <div className="skill"><p>CSS/LESS</p></div>
            <div className="skill"><p>Responsive Web Design</p></div>
            <div className="skill"><p>React</p></div>
            <div className="skill"><p>Redux</p></div>
            <div className="skill"><p>Git Flow</p></div>
            <div className="skill"><p>JavaScript</p></div>
            <div className="skill"><p>Node.js</p></div>
            


        </div>

    </div>
    )
}