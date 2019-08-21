import React from 'react';
import axios from 'axios';
import Clipboard from 'clipboard';
import Button from './Button.js';
import '../scss/Searchbox.scss';
import '../scss/states.scss';

class Searchbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      shortLink: ''
    }
    this.clipboard = new Clipboard('.clipboard-button');
    this.handleChange = this.handleChange.bind(this);
    this.shortenLink = this.shortenLink.bind(this);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }


  shortenLink(event) {
    if (event) {
      event.preventDefault();
    }

    axios.post('https://rel.ink/api/links/', {
      url: this.state.value
    })
    .then((response) => {
      this.setState({
        shortLink: `https://rel.ink/${response.data.hashid}`
      });

      // Update the value of input to the shortened link
      document.querySelector('.Searchbox-input').value = this.state.shortLink;

      document.querySelector('.clipboard-button').classList.remove('is-hidden');
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        <form onSubmit={this.shortenLink}>
          <div className="Searchbox-input-group">
            <input id="Searchbox-input" className="Searchbox-input" type="text" placeholder="Enter URL" onChange={this.handleChange} />
            <button class="clipboard-button is-hidden" data-clipboard-target="#Searchbox-input">Copy link</button>
          </div>
          <Button />
        </form>
      </div>
    );
  }
}

export default Searchbox;