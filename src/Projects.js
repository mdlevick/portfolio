import React from 'react';
import {Link} from "react-router-dom";
import marketing from "./img/marketing.jpg";
import todo from "./img/todo.jpg";
import carSales from "./img/carSales.jpg";



export default function Projects () {

    return(
        <div id="projectsTab">
        <Link to={`/`}><div className="closeButton" ><h3>X</h3></div></Link>

        <div className="mainProjects">
            <div className="TNI">
            <h3>Projects</h3>
            
            <p>these are some of the projects ive worked on while going to Lambda</p>
            </div>
<div className="projects">
            <div className="html">
            <img src={marketing} alt="Marketing page" />
                <h2 className="title"><a href="https://nostalgic-sinoussi-ec1542.netlify.com" target="_blank" rel="noopener noreferrer">VR Connect Marketing Page</a></h2>
                <p className="projDesc">Did this project during a build week with six other developers doing different parts. This was my part in doing this project.</p>
                <p className="stackUse">Built using HTML, CSS and LESS.</p>
                <div>
                    <a href="https://github.com/VirtualReality-Funding-Platform/Marketing-page" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square">  Project Repository</i></a>
                </div>
                <ul>
                    <li>Used time well</li>
                    <li>Built HTML then styled it</li>
                    <li>This page was my sole responsibility</li>
                </ul>
            </div>

            <div className="react">
            <img src={todo} alt="Todo page" />
                <h2 className="title"><a href="https://reducer-todo-eight-wine.now.sh/" target="_blank" rel="noopener noreferrer">Reducer Todo</a></h2>
                <p className="projDesc">This project was done to learn the reducer function and component out the actions to a seperate case block.</p>
                <p className="stackUse">Built with React, JSX, and a reducer function</p>
                <div>
                    <a href="https://github.com/mdlevick/reducer-todo" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square">  Project Repository</i></a>
                </div>
                <ul>
                    <li>Built out the componets then wired in the Reducer</li>
                    <li>got done with assignment before it was due</li>
                    <li>this was a solo project</li>
                </ul>
            </div>

            <div className="redux">
            <img src={carSales} alt="Car Sales page" />
                <h2 className="title"><a href="https://car-sales-ll5zn3ng4.now.sh/" target="_blank" rel="noopener noreferrer">Car Sales</a></h2>
                <p className="projDesc">This project was an assignment that came with some of the code but had to wire in the Redux</p>
                <p className="stackUse">Built using Redux, React, and CSS</p>
                <div>
                    <a href="https://github.com/mdlevick/Car-Sales" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square">  Project Repository</i></a>
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