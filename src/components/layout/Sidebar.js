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
                  <NavLink exact to="/"  activeStyle={{
                    fontWeight: "bold",
                    color: "#32E3C2"
                }}>.Home()</NavLink>
                  </li>
                  <li>
                  <NavLink to="/about"  activeStyle={{
                    fontWeight: "bold",
                    color: "#32E3C2"
                }}>.About()</NavLink>
                  </li>
                  <li>
                  <NavLink to="/portfolio"  activeStyle={{
                    fontWeight: "bold",
                    color: "#32E3C2"
                }}>.Portfolio()</NavLink>
                  </li>
                  <li>
                  <NavLink to="/contact"  activeStyle={{
                    fontWeight: "bold",
                    color: "#32E3C2"
                }}>.Contact()</NavLink>
                  </li>
              </ul>
          </nav>
     
        );
    }
}

export default Sidebar;
