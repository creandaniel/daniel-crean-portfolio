import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (
        <div className="" id="content">
        
        <h2>404</h2>
        <span class="divider center"> </span>

       <p> Error Page Not Found</p>

        </div> 
        );
    }
}

export default NotFoundPage ;
