import React from 'react';
import Searchbox from './components/Searchbox.js';
import './scss/text-styles.scss';
import './scss/App.scss';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <h2 className="text-header">Small Link</h2>
          <p className="text-subheader">A simple way to shorten links.</p>
          <Searchbox />
        </div>
      </header>
    </div>
  );
}

export default App;
