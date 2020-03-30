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
    padding: 5px 0px;
    text-align: left;
  }

    .main a{
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
    }
    ul{
        padding: 1% 0;
        text-align: left;
        padding: 5px auto;
    }
    img{
        width: 40%;
        height: auto;
        padding: 20px;
        margin: 0 auto;
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
        width: 60%;
        margin: auto;
        padding: 10px;
       }
       
       .main ul{
         list-style-type: none;
       }
       .fas{
        color: white;
        }

    @media only screen and (max-width: 890px){
      display: flex;
    flex-direction: column;
    width: 65%;
    height: auto;
        border: none;
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        background: none;
        .buttonCont{
          width: 100%;
          display: flex;
    flex-direction: column;
    align-items: left;

        }
            img{
      width: 85%;
    }
    .main{
      width: 90%;
      p{
        padding: 1% 1%;
      }
    }
    }
`
    

export default function About(props) {
	return (
		<Overlay>
			<AboutTab>
				<div className="buttonCont">
					<button className="closeButton" onClick={() => props.history.goBack()}>
						<h3>X</h3>
					</button>
				</div>
				
					<img src={michael} alt="Michael David Levick, Jr." />
				
				<div className="main">
					<p>
            I am looking for a job that I can flex what I know and learn more about Web Development and making web apps in general. I have been working with and on computers for over 20	years, until recently it has been, in a more Technical Support aspect. I enjoy making chain mail and going to the renaissance faire. My first computer was an IBM P/S 1 with Windows 3.0 and DOS. I enjoy learning and and look forward to learning new things about the world and technology everyday. I look forward to working on code and creating functional and elegant apps that people will love. 
					</p>

					<ul>
						<li>(817) 404-9452</li>
						<li>San Antonio, TX</li>
            <li><a href="mailto:mdlevick@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope-square"></i> Email</a></li>
					</ul>
				</div>
			</AboutTab>
		</Overlay>
	);
}
