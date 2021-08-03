import React, { Component, useCallback } from 'react';
//import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReactDOM from "react-dom";
import GetData  from './data/fetchPageContent';


class About extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = { taxablePay: "" };
  }


    render() {
      return (
        <div id="content">
             <h2 className="portfolio-title" id="about"> About() </h2>
             <p className="subheading">I am an full-stack developer specialising in PHP, Symfony and React, based in London United Kingdom. </p>
              <span className="divider center"> </span>


              <p>I currently work in full time employment at Tekpaw; an digital marketing agency as a full-stack developer. I specialise in maintaining and creating websites weather on front-end or back-end solution. I work with variety of clients in the same company via different language markets. I have been developing websites since 2012. </p>

              <p>My full-stack development skills are an combination of degree based learning from Roehampton University Which I graduated from in 2012. 
                I also improved on this during the years self-learning via experience at my job and self-learning to hone my skills, as there is an neverending journey
                to learning and also staying upto-date on latest trends to stay relevent. 
              </p>

              <div className="line"></div>
        {/*  https://www.taniarascia.com/me https://iuri.is/work */}
            <h3>Hobbies</h3>
            <p>
              Outside of coding, I am into other geeky stuff. I mainly enjoy playing video games, mainly on the Nintendo side and enjoy an good RPG. 
              And also unwind watching an movie or TV series/Anime. 
            </p>

            <p>
              I try to take care of both my physical and mental health. 
              I enjoy working out at the gym on an casual basis, and also walking in parks. Sometimes I travel outside of London when I get the chance. 

            </p>


          <div className="line"></div>
            {/* <GetData name={this.constructor.name}/> https://soumyajit.tech/about */ }
          
            <h3>Professional Skillset/Languages</h3>
            <ul>
              <li>PHP (5 and 7)</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>

      

            <h3>
              Frameworks & Libraries
            </h3>

            <ul>
              <li>Symfony</li>
              <li>React</li>
              <li>WordPress</li>
              <li>Flask (Some working knowledge)</li>
              
              </ul>

            <h3>Tools I Use</h3>
            <ul>
              <li>Git</li>
              <li>Visual Studio Code</li>
              <li>Linux</li>
              <li>Apache</li>
              

            </ul>
        </div>

      );
    }
  }

export default About;


