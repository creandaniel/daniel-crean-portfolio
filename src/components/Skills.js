import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReactDOM from "react-dom";
import GetData  from './data/fetchPageContent';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPython} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


library.add(faPython);


class Skills extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = { taxablePay: "" };
  }


    render() {
      return (
        <div className="col-10 px-4 offset-2" id="main">
            <h2 class="portfolio-title" id="about"> {this.constructor.name} </h2>
              <span class="divider center"> </span>
          
            <GetData name={this.constructor.name}/>


            <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-5 col-lg-4 p-0">
                <h3>  Languages</h3>
                <ul>
                  <li><i class="fab fa-php  fa-lg "></i>  PHP5/7</li>
                  <li><i class="fab fa-python  fa-lg "></i>Python (3.0)</li>
                <li> <i class="fas fa-database"></i> MySQL</li>
                <li><i class="fab fa-html5  fa-lg "></i> HTML5 (Also Twig and Smarty)</li>
                <li><i class="fab fa-css3-alt  fa-lg "></i> CSS3</li>
                  <li><i class="fab fa-js  fa-lg "></i> JavaScript</li>

                </ul>

                </div>



                <div class="col-xs-4 col-sm-4 col-md-5 col-lg-4 p-0">

                  <h3>Frameworks & Libs</h3>
                          <ul>
                    <li> <i class="fab fa-symfony"></i>   Symfony (2/3)</li>
                      <li> <i class="fab fa-laravel"></i> Laravel</li>
                      <li><i class="fas fa-laptop-code"></i>  Slim</li>
                      <li><i class="fab fa-wordpress"></i>  Wordpress </li>
                      <li><i class="fab fa-react"></i>  React & Jquery</li>
                      <li> <i class="fab fa-bootstrap"></i>  Bootstrap (3 or 4)</li>
                    </ul>

                </div>


                <div class="col-xs-4 col-sm-4 col-md-5 col-lg-4 p-0">
                  <h3>Additional Skillset:</h3>
                          <ul>
                    <li><i class="fas fa-server"> </i>  UNIX server administration (Apache 2)</li>
                      <li><i class="fab fa-bootstrap"></i>   Agile workflows</li>
                        <li><i class="fab fa-searchengin"></i> SEO On-page Optimisation</li>
                        <li><i class="fas fa-object-group"></i> Object Oriented Programming</li>
                        <li> <i class="fab fa-git"></i>Version Control (Git & SVN)</li>
                        <li><i class="fab fa-linux"></i>Linux/Windows </li>
                      </ul>
                </div>




</div>




        </div>
      );
    }
  }

export default Skills;


