import React, { Component, useState  } from "react";
import ReactDOM from "react-dom";
import { Button,Modal} from 'react-bootstrap'; 
import Popup from './Popup';


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          data: [],
          showPopup: false,
          activeItem:'' //new added
       
        };
       
    }

   
   
    componentDidMount() {
        fetch(`http://127.0.0.1:5000/api/github`)
        
          .then(res => res.json())
          .then(json => {
            const networkData = json;
            this.setState({ 
              data: networkData
            });
          })
      }

      togglePopup(item) {
        this.setState({activeItem:item}, ()=> this.setState({ showPopup: !this.state.showPopup }));
      }


      addDefaultSrc(ev){
        ev.target.src = 'https://i.ytimg.com/vi/R0gVMx2vFd0/maxresdefault.jpg'
      }



      render() {

        return (
    <div id="content" className="container-fluid">


            <h2>Portfolio</h2>

      <p>See all my work below. Unless explicitly stated, all of my work is completely done by me. My work is is combination of live projects and also GitHub work I have done in my spare time. </p>

      <div className="line"></div>
      

      <div className="bs-example ">
    <div className="">
        <div className="row">

              {this.state.data.map((item) => (
  
                <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 card-container" key={item.id}>

                

                 <div>

      </div>
         
               
                <div className="card">
                    <img src={item.manualimage} onError={this.addDefaultSrc} className="card-img-top" alt={item.name} />
                    <div className="card-body overlay text">
                    <h5 >{item.name.replace(/-/g, " ")}</h5>
                    <button onClick={()=> this.togglePopup(item)}> Learn More</button>

                 
         
                    <p className="card-text"> </p>

                    
                  <p className="language-text">Langauge: {item.language}
                  </p>
                    </div>
                </div>
                </div>
                
              ))}
                {this.state.showPopup ?
         <Popup
          text={this.state.activeItem.name}
          description={this.state.activeItem.description}
          key={this.state.activeItem.id}
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }

        </div>
    </div>
</div>
          </div>
        );
      }
    }
    { /*https://www.nomisoft.co.uk/portfolio// http://findmatthew.com/ */ }
export default Portfolio;

