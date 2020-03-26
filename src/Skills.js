import React from 'react';
import code from "./img/markus-spiske.jpg";
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Overlay = styled.div`
    @media only screen and (max-width: 890px){
        background-color: rgba(0,0,0,.75);
        width: 100vw;
        height: 100vh;
   
    @media only screen and (max-width: 375){
        width: 100vw;
        height: 100%;
    } 
}
`

const SkillsTab = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: auto;
    margin: 5% auto;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    border: 2px white solid;
    padding-bottom: 5%;

    img{
        width: 150px;
        height: auto;
      }
      
      .closeButton {
        border: 2px white solid;
        border-radius: 0 0 60px 0;
        width: 60px;
        background-color: white;
        color: black;
        cursor: pointer;

      }

      .mainSkills{
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        
      
      }
      .TNI{
        width: 100%;
      }
      
      .skill{
        width: 100px;
        border-radius: 10px;
        border: white 2px solid;
        margin: 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    @media only screen and (max-width: 890px){
        border: none;
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        background: none;
    }
`

export default function Skills (props) {
const skills = ["HTML", "CSS/LESS", "Responsive Web Design", "React", "Redux", "Git Flow", "JavaScript", "Context Hooks", "Node.js", "Express", "Sessions", "JWT", "AWS", "React Testing Library", "JEST", "Stylizing Dependencies"  ]
    return(
        <Overlay>
        <SkillsTab>
        <button className="closeButton" onClick={() => props.history.push(`/`)}>
						<h3>X</h3>
					</button>

        <div className="mainSkills">
            <div className="TNI">
           
            <img src={code} alt="code." />
            <p>I learned these skills from self study and through Lambda Schools Web Development path</p>
            </div>

        {skills.map(skill => 
            <div className="skill"><div>{skill}</div></div>
            )}


        </div>

    </SkillsTab>
    </Overlay>
    )
}