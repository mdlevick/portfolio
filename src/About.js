import React from 'react';
import michael from "./img/Michael.jpg";
import {Link} from "react-router-dom";



export default function About () {

    return(
        <div id="aboutTab">
            <Link to={`/`}><div className="closeButton" ><h3>X</h3></div></Link>

            <div className="main">
                <h3>About</h3>
                <img src={michael} alt="Michael David Levick, Jr." />
                <p>My name is Michael Levick and I have been working with and on computers for over 20 years. until recently it has been, in a more Technical Support aspect. My first computer was an IBM P/S 1 with Windows 3.0 and DOS. I enjoy learning and continue to do so daily and plan to do so for the rest of my days. I am a student at Lambda School and plan to graduate in July of 2020. I have a project in mind, once I learn enough and I think it will be well received. To describe it better, it would be a more simple version of GitHub. I enjoy Video Games and would like to learn to develop them in the future.</p>

                <ul>
                <li>(817) 404-9452</li>
                <li>117 Salas Dr.</li>
                <li>San Marcos, TX 78666</li>
                <li><a href="mailto:mdlevick@gmail.com">mdlevick@gmail.com</a></li>
                </ul>

            </div>

        </div>
    ) 
}