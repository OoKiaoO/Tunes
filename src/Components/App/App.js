import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1><span className="highlight">Tunes</span></h1>
        <div className="App">
          {/* Add a SearchBar component */}
          <div className="App-playlist">
            {/* Add a SearchResults component */}
            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
