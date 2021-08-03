import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Home extends Component {
    render() {

        


        return (

<div className="jumbotron jumbotron-fluid full-height tinted  text-center ">
  <div className="container center-home">
    <h1 className="display-4 home-title mb-4">Daniel Crean - Web Developer based in London - United Kingdom</h1>
    <p class="jumbotron-subheading mb-3">I'm a full stack developer with PHP experience including with Symfony. I also do front end development including with JavaScript and React. </p>
  

    <button className="btn-home btn bg-transparent btn btn-outline-dark" data-wow-delay="2.5s">
      <a href="/about">
        Learn More
        </a>
    </button>
  
  </div>
</div>


        );
    }
}
//https://www.millyberst.com/#about

export default Home;
