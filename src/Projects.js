import React from 'react';
import busy from "./img/charl-folscher.jpg";
import {Link} from "react-router-dom";

export default function Projects () {

    return(
        <div id="projectsTab">
        <Link to={`/`}><div className="closeButton" ><h3>X</h3></div></Link>

        <div className="mainProjects">
            <div className="TNI">
            <h3>Projects</h3>
            <img src={busy} alt="time-lapse Dallas" />
            <p>these are some of the projects ive worked on while going to Lambda</p>
            </div>
<div className="projects">
            <div className="html">
                <h2 className="title"><a href="https://nostalgic-sinoussi-ec1542.netlify.com">VR Connect Marketing Page</a></h2>
                <p className="projDesc">Did this project during a build week with six other developers doing different parts. This was my part in doing this project.</p>
                <p className="stackUse">Built using HTML, CSS and LESS.</p>
                <div>
                    <a href="https://github.com/VirtualReality-Funding-Platform/Marketing-page" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                </div>
                <ul>
                    <li>Used time well</li>
                    <li>Built HTML then styled it</li>
                    <li>This page was my sole responsibility</li>
                </ul>
            </div>

            <div className="react">
                <h2 className="title"><a href="https://reducer-todo-eight-wine.now.sh/">Reducer Todo</a></h2>
                <p className="projDesc">This project was done to learn the reducer function and component out the actions to a seperate case block.</p>
                <p className="stackUse">Built with React, JSX, and a reducer function</p>
                <div>
                    <a href="https://github.com/mdlevick/reducer-todo" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                </div>
                <ul>
                    <li>Built out the componets then wired in the Reducer</li>
                    <li>got done with assignment before it was due</li>
                    <li>this was a solo project</li>
                </ul>
            </div>

            <div className="redux">
                <h2 className="title"><a href="https://car-sales-ll5zn3ng4.now.sh/">Car Sales</a></h2>
                <p className="projDesc">This project was an assignment that came with some of the code but had to wire in the Redux</p>
                <p className="stackUse">Built using Redux, React, and CSS</p>
                <div>
                    <a href="https://github.com/mdlevick/Car-Sales " target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                </div>
                <ul>
                    <li>overcame difficulties</li>
                    <li>refactored react app for Redux</li>
                    <li>had to add and subtract car parts from both sides</li>
                </ul>
            </div>

</div>
        </div>
        </div>
    )
}