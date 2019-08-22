import React from 'react';
import axios from 'axios';
import Clipboard from 'clipboard';
import Button from './Button.js';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/nest.css';
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
    this.alertLinkCopied = this.alertLinkCopied.bind(this);
  }


  // Update input value as user types
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }


  // Create and display alert that link has been copied
  alertLinkCopied() {
    new Noty({
      layout: 'topCenter',
      progressBar: false,
      theme: 'nest',
      text: 'Link has been copied',
      type: 'success',
      timeout: '1500'
    }).show();
  }


  // Make API call to get shortened link
  shortenLink(event) {
    event.preventDefault();

    axios.post('https://rel.ink/api/links/', {
      url: this.state.value
    })
    .then((response) => {
      this.setState({
        shortLink: `https://rel.ink/${response.data.hashid}`
      });

      // Update the value of input to the shortened link
      document.querySelector('.Searchbox-input').value = this.state.shortLink;

      // Display 'Copy link' button only once a link has been shortened
      document.querySelector('.clipboard-button').classList.remove('is-hidden');
    })
    .catch(error => console.log(error))
  }


  // Render the form for users to input link
  render() {
    return (
      <div>
        <form onSubmit={this.shortenLink}>
          <div className="Searchbox-input-group">
            <input id="Searchbox-input" className="Searchbox-input" type="text" placeholder="Enter URL" onChange={this.handleChange} />
            <button className="clipboard-button is-hidden" onClick={this.alertLinkCopied} data-clipboard-target="#Searchbox-input">Copy link</button>
          </div>
          <Button />
        </form>
      </div>
    );
  }
}

export default Searchbox;