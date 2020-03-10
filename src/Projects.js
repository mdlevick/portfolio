import React from 'react';
import {Link} from "react-router-dom";
import marketing from "./img/marketing.jpg";
import todo from "./img/todo.jpg";
import carSales from "./img/carSales.jpg";
import styled from 'styled-components'

const Overlay = styled.div`
    @media only screen and (max-width: 890px){
        background-color: rgba(0,0,0,.75);
        width: 100vw;
        height: 100%;
    @media only screen and (max-width: 530){

    } 

}   

`

const ProjectsTab = styled.div`
    display: flex;
    flex-direction: column;
    width: 93%;
    height: auto;
    margin: 4% 4%;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    border: 2px white solid;
    padding: 0  0 10px 0;
     
        .closeButton {
            border: 2px white solid;
            border-radius: 0 0 60px 0;
            width: 60px;
            background-color: white;
            color: black;
        }
        .html, .react, .redux{
            text-align: center;
            padding: 5px;
            width: 250px;
        }
        .html i, .react i, .redux i{
            font-size: 2rem;
        }
        
    img {
        width: 150px;
        height: auto;
        
        
        }

        .mainProjects {
            margin: 0 
        }
        a {
           
            color: white;
        }
        a:visited {
            color: white;
            }

        
.projects{
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .html, .react, .redux{
    width: 30%;
    border-radius: 10px;
    border: white 2px solid;
    margin: 10px;
    text-align: center;
  }
  
  .html a, .react a, .redux a{
   margin: 0 auto;

}

    @media only screen and (max-width: 890px){
        border: none;
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        background: none;
        @media only screen and (max-width: 530px){
        .pics{
display: none;
        }
        .html, .react, .redux{
            width: 90%;

          }
    }
    }

`


export default function Projects () {

    return(
        <Overlay>
        <ProjectsTab>
        <Link to={`/`}><div className="closeButton" ><h3>X</h3></div></Link>

        <div className="mainProjects">
            <div className="TNI">
            <h3>Projects</h3>
            
            <p>these are some of the projects ive worked on while going to Lambda</p>
            </div>
<div className="projects">
            <div className="html">
            <a href="https://nostalgic-sinoussi-ec1542.netlify.com" className="pics" target="_blank" rel="noopener noreferrer"><img src={marketing} alt="Marketing page" /></a>
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
            <a href="https://car-sales-ll5zn3ng4.now.sh/" className="pics" target="_blank" rel="noopener noreferrer"><img src={todo} alt="Todo page" /></a>
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
            <a href="https://car-sales-ll5zn3ng4.now.sh/" className="pics" target="_blank" rel="noopener noreferrer"><img src={carSales} alt="Car Sales page" /></a>
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
        </ProjectsTab>
        </Overlay>
    )
}