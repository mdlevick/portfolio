import {Link} from "react-router-dom";
import React from 'react';
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
const HomeTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10 % 5%;
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
        }

        h1{
            font-size: 3rem;
        }
        
        h2{
        font-size: 1.2rem;
        }
        nav ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5% 0px;
        
        
        }
        nav ul li {
        list-style-type: none;
        width: 75px;
        border: 2px white solid;
        border-radius: 10px;
        
        padding: 10Px;
        
        }
        nav ul li a{
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        
        }
        
        nav ul li a:visited{
        color: white;
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
        
        .fab{
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
        }
     }

  `

export default function Home () {


    return(
        <Overlay>
        <HomeTab>

        

        <div id="title">
            <h1>Michael David Levick, Jr.</h1>
     
            <h2>A place to show myself off and show what I can do with the knowledge I have learned.</h2>
        </div>

        <nav>
            <ul>
                <li><Link to={`/about`}>About</Link></li>
                <hr></hr>
                <li><Link to={`/skills`}>Skills</Link></li>
                <hr></hr>
                <li><Link to={`/projects`}>Projects</Link></li>
                {/* <hr></hr>
                <li><Link to={`/contact`}>Contact</Link></li>					 */}
            </ul>
		</nav>

    <footer className="icons">
    
        <div>
        <a href="https://www.linkedin.com/in/michael-david-levick-jr-81b4a0115/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
        </div>
        <hr></hr>
        <div>
        <a href="https://github.com/mdlevick" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
        </div>
        <hr></hr>
        <div>
        <a href="https://twitter.com/LevickMichael" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square"></i></a>
        </div>
    </footer>

        </HomeTab>
        </Overlay>
    )
}