import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitterSquare, faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


library.add(faTwitterSquare,faGithubSquare,faLinkedin, faEnvelopeSquare); 



class Sidebar extends Component {
    render() {
        return (
          <nav id="sidebar">
              <div className="sidebar-header">
                  <h3 className="website-title">Daniel Crean</h3>
              </div>
  
              <ul className="list-unstyled components">
                  <p className="sidebar-subheading">Full Stack PHP Developer</p>
                  <li>
                      <a href="/">.Home()</a>
                  </li>
                  <li>
                      <a href="/about" title="Learn more about me and my skillset">.About()</a>
                  </li>
                  <li>
                      <a href="/portfolio" title="My projects of what I have coded">.Portfolio()</a>
                  </li>
                  <li>
                      <a href="/contact" title="Talk to me">.Contact()</a>
                  </li>
              </ul>
          </nav>
     
        );
    }
}

export default Sidebar;
