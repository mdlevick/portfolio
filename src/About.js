import React from 'react';
import michael from './img/Michael.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Overlay = styled.div`
	@media only screen and (max-width: 890px) {
		background-color: rgba(0, 0, 0, 0.75);
		width: 100vw;
		height: 100vh;
	}

	@media only screen and (max-width: 490) {
		width: 100%;
		height: 100%;
	}
`;

const AboutTab = styled.div`
 
    display: flex;
    flex-direction: row;
    width: 65%;
    height: auto;
    margin: 5vh auto;
  
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    border: 2px white solid;
  
   p{
    padding: 5px 30px;
    text-align: left;
  }

    .main a{
        font-size: 1.6rem;
        font-weight: bold;
        color: dodgerblue;
    }
    ul{
        width: 100vw;
        height: 100%;
        padding 1% 0;
        text-align: left;
        padding: 5px 30px;
    }
    img{
        width: 460px;
        height: auto;
        padding: 20px;
      }
      
      .closeButton {
        border: 2px white solid;
        border-radius: 0 0 60px 0;
        width: 60px;
        background-color: white;
        color: black;
        cursor: pointer;
      }
      .main{
        height: auto;
        width: 61%;
        margin: auto;
       }
       
       .main ul{
         list-style-type: none;
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
    

export default function About(props) {
	return (
		<Overlay>
			<AboutTab>
				<div>
					<button className="closeButton" onClick={() => props.history.push(`/`)}>
						<h3>X</h3>
					</button>
				</div>
				<div>
					<img src={michael} alt="Michael David Levick, Jr." />
				</div>
				<div className="main">
					<p>
            I am looking for a job that I can flex what i know and learn more about Web Development and making web apps in general. I have been working with and on computers for over 20	years. until recently it has been, in a more Technical Support aspect. I enjoy making chain mail and going to the renaissance faire. My first computer was an IBM P/S 1 with Windows 3.0 and DOS. I enjoy learning and and look forward to learning new things about the world and technology everyday. I look forward to working on code and creating functional and elegant apps that people will love. 
					</p>

					<ul>
						<li>(817) 404-9452</li>
						<li>San Antonio, TX</li>
					</ul>
				</div>
			</AboutTab>
		</Overlay>
	);
}
