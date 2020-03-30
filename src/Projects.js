import React from 'react';
import {Link} from "react-router-dom";
import marketing from "./img/marketing.jpg";
import todo from "./img/Todo.gif";
import carSales from "./img/carSales.gif";
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
    width: 75%;
    height: auto;
    margin: 4% auto;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    border: 2px white solid;
    padding: 0  0 10px 0;
     h1{
         font-size: 2rem;
     }
        .closeButton {
            border: 2px white solid;
            border-radius: 0 0 60px 0;
            width: 60px;
            background-color: white;
            color: black;
            cursor: pointer;
            
        }

        .html i, .react i, .redux i{
            font-size: 3rem;
        }
        
    img {
        width: 50%;
        height: auto;
        padding: 25px;
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
    ul{
        text-align: left;
    }

        
.projects{
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .html, .react, .redux{
    width: 85%;
    border-radius: 10px;
    border: white 2px solid;
    margin: 10px;
    text-align: center;
  }
  
  .html a h2, .react a h2, .redux a h2{
   margin: 0 auto;
   font-size: 3rem;

}

    @media only screen and (max-width: 890px){
        border: none;
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        background: none;

        p{
            padding: 0 5%;
        }
        @media only screen and (max-width: 530px){
        img{
                    width: 90%;
                    padding: 3%;
                    }
        .html, .react, .redux{
            width: 90%;
          

            .aPics {
                
                font-size: 0rem;

                    
                    }
            }
            a h2{
                margin: 0 auto;
                font-size: 3rem;  
            }
          }
    }
    }

`


export default function Projects (props) {

    return(
        <Overlay>
        <ProjectsTab>
        <button className="closeButton" onClick={() => props.history.goBack()}>
						<h3>X</h3>
					</button>

        <div className="mainProjects">
            <div className="TNI">
            <h1>Projects</h1>
            </div>
<div className="projects">
            <div className="html">
            <a href="https://nostalgic-sinoussi-ec1542.netlify.com" className="pics aPics" target="_blank" rel="noopener noreferrer"><img src={marketing} alt="Marketing page" /></a>
                <h2 className="title"><a href="https://nostalgic-sinoussi-ec1542.netlify.com" target="_blank" rel="noopener noreferrer">VR Connect Marketing Page</a></h2>
                <p className="projDesc">Did this project during a build week with six other developers doing different parts. This was my part in doing this project</p>
                <p className="stackUse">Built using HTML, CSS and LESS</p>
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
            <a href="https://reducer-todo-eight-wine.now.sh/"  className="pics aPics" target="_blank" rel="noopener noreferrer"><img src={todo} alt="Todo page" /></a>
                <h2 className="title"><a href="https://reducer-todo-eight-wine.now.sh/" target="_blank" rel="noopener noreferrer">Reducer Todo</a></h2>
                <p className="projDesc">This project was done to learn the reducer function and component out the actions to a seperate case block</p>
                <p className="stackUse">Built with React, JSX, and a reducer function</p>
                <div>
                    <a href="https://github.com/mdlevick/reducer-todo" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                </div>
                <ul>
                    <li>Built out the componets then wired in the Reducer</li>
                    <li>finished with assignment before it was due</li>
                    <li>this was a solo project</li>
                </ul>
            </div>

            <div className="redux">
            <a href="https://car-sales-ll5zn3ng4.now.sh/" className="pics aPics" target="_blank" rel="noopener noreferrer"><img src={carSales} alt="Car Sales page" /></a>
                <h2 className="title"><a href="https://car-sales-ll5zn3ng4.now.sh/" target="_blank" rel="noopener noreferrer">Car Sales</a></h2>
                <p className="projDesc">This project was an assignment that came with some of the code but had to wire in the Redux</p>
                <p className="stackUse">Built using Redux, React, and CSS</p>
                <div>
                    <a href="https://github.com/mdlevick/Car-Sales" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                </div>
                <ul>
                    <li>overcame difficulties understanding how Redux worked</li>
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