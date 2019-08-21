import React from 'react';
import Searchbox from './components/Searchbox.js';
import './scss/App.scss';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h2>Small Link</h2>
        <p>A simple way to shorten links.</p>
        <Searchbox />
      </header>
    </div>
  );
}

export default App;
