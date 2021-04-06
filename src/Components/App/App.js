import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchResults: [
        {
          id: 1,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        },
        {
          id: 2,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        },
        {
          id: 3,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        }
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {
          id: 1,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        },
        {
          id: 2,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        },
        {
          id: 3,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Tunes</span></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
