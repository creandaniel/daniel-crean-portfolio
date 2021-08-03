import React from 'react';
import './Popup.css';


class Popup extends React.Component {
 
  
  
  render() {

    console.log(this.props);
    return (
      
        <div className="popup" key={this.props.id}>
          <div className='popup_inner'>
          <h3>{this.props.text}</h3>
            <p> {this.props.description}</p>
            <button className="popupclose" onClick={this.props.closePopup}>X</button>
          </div>
      </div>
    );
  }
}

export default Popup;