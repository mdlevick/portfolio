import {Link} from "react-router-dom";
import React from 'react';
import styled from 'styled-components'

const Overlay = styled.div`
    @media only screen and (max-width: 890px){
        background-color: rgba(0,0,0,.75);
        width: 100vw;
        height: 100vh;
    }  
    @media only screen and (max-width: 375px){
        width: 100vw;
        height: 100%;
    } 

`
const HomeTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10% 5%;
    width: 95%;
    height: auto;
    margin: 4% auto;
    background-color: rgba(0,0,0,.75);
    border-radius: 10px;
    border: 2px white solid;
    padding: 8%;
        
        #title{
            border: 2px white solid;
            border-radius: 10px;
            background: none;
            padding: 10Px;
            margin: 0 25px;
        }

        h1{
            font-size: 4rem;
        }
        
        h2{
        font-size: 2.6rem;
        }
        nav .links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5% 0px;
        
        
        }
        nav .links button {
        list-style-type: none;
        width: 20%;
        background: none;
        color: #FFFFFF;
        cursor: pointer;
        font-weight: bolder;
        border: 2px white solid;
        border-radius: 10px;
        font-size: 1.2rem;
        font-family: "apple-system", "BlinkMacSystemFont", 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        padding: 10Px;
        
        }
        nav .links div a{
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        
        }
      .resume{
        text-decoration: none;
        list-style-type: none;
    width: 20%;
    background: none;
    color: #FFFFFF;
    cursor: pointer;
    font-weight: bold;
    border: 2px white solid;
    border-radius: 10px;
    font-size: 1.2rem;
    padding: 10Px;
        }
        
        nav .links div a:visited{
        color: white;
        }
        nav .links button:hover, .resume:hover{
            background: white;
    color: #000000;
        }
        footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 75%;
        margin: 1% auto;
        text-align: center;
        }
        
        footer div{
        width: 75px;
        padding: 10Px;
        }
        
        footer div i {
        font-size: 3rem;
        
        }
        
        .fab, .fas{
        color: white;
        }

     @media only screen and (max-width: 890px){
        border: none;
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        background: none;

        #title{
            margin: 10px 20px;
        }

        nav{
            margin: 10px  auto;
            width: 100%;
            .links{
                display: flex;
                flex-direction: column;
                a{
                    width: 90%;
                    button  {
                        width: 100%;
                        margin: 0px  auto;
                   }
                }
                button{
                    width: 90%;
                    margin: 0px  auto;
                }
                .resume{
                    margin: 0 auto;
                    width: 87.25%;
                }
            }
        }
     }

  `

export default function Home (props) {


    return(
        <Overlay>
        <HomeTab>

        

        <div id="title">
            <h1>Michael Levick</h1>
            <h2>Web Developer</h2>

        </div>

        <nav>
            <div className="links">
                <button onClick={() => props.history.push(`/about`)}>About</button>
                <hr></hr>
                <button onClick={() => props.history.push(`/skills`)}>Skills</button>
                <hr></hr>
                <button onClick={() => props.history.push(`/projects`)}>Projects</button>
                <hr></hr>
                <a href="https://docs.google.com/document/d/14OT6pRw2-q3TucvNumqIFwcSfNHSGLrxmswSrKngOYw/edit?usp=sharing" class="resume" target="_blank" rel="noopener noreferrer">Resume</a>
                {/* <hr></hr>
                <button>onClick={() => props.history.push(`/contact`)}>Contact</button>					 */}
            </div>
		</nav>

    <footer className="icons">
    
        <div>
        <a href="www.linkedin.com/in/Michael-Levick" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
        </div>
        <hr></hr>
        <div>
        <a href="https://github.com/mdlevick" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
        </div>
        <hr></hr>
        <div>
        <a href="https://twitter.com/LevickMichael" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square"></i></a>
        </div>
        <hr></hr>
        <div>
        <a href="mailto:mdlevick@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope-square"></i></a>
        </div>
    </footer>

        </HomeTab>
        </Overlay>
    )
}