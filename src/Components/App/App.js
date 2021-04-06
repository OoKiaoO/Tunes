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
          id: 4,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        },
        {
          id: 5,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        },
        {
          id: 6,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name'
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    const trackId = track.id;
    const tracklist = this.state.playlistTracks;
    let trackSaved = this.state.playlistTracks.find(track => track.id === trackId);
    if (!trackSaved) {
      tracklist.push(track);
      this.setState({
        playlistTracks: tracklist
      })
    } 
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Tunes</span></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
