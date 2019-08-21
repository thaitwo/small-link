import React from 'react';

class Shortlink extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div id="Shortlink-link-wrapper">
        <a href="{this.props.link}" className="Shortlink-link">{this.props.link}</a>
      </div>
    );
  }
}

export default Shortlink;