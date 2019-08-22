import React from 'react';
import '../scss/Button.scss';

class Button extends React.Component {
  render() {
    return (
      <div className="Button-wrapper">
        <button className="Button" type="submit" >Shorten</button>
      </div>
    )
  }
}

export default Button;