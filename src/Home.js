import {Link} from "react-router-dom";
import React from 'react';

export default function Home () {


    return(
        <div id="home">

        

        <div id="title">
            <h1>Michael David Levick, Jr.</h1>
     
            <h2>a place to show myself off and show what I can do with the knowledge I have learned.</h2>
        </div>

        <nav>
            <ul>
                <li><Link to={`/about`}>About</Link></li>
                <hr></hr>
                <li><Link to={`/skills`}>Skills</Link></li>
                <hr></hr>
                <li><Link to={`/projects`}>Projects</Link></li>
                <hr></hr>
                <li><Link to={`/contact`}>Contact</Link></li>					
            </ul>
		</nav>

    <footer className="icons">
        <div>
        <a href="https://www.facebook.com/aethergrove.anun" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>
        </div>
        <hr></hr>
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

        </div>
    )
}