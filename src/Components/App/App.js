import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

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
          album: 'Album Name',
          trackURI: 'spotify:track:4rqhFgbbKwnb9MLmUQDhG6'
        },
        {
          id: 5,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name',
          trackURI: 'spotify:track:5rqhFgbbKwnb9MLmUQDhG6'
        },
        {
          id: 6,
          name: 'Track Name',
          artist: 'Artist Name',
          album: 'Album Name',
          trackURI: 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const trackId = track.id;
    const tracklist = this.state.playlistTracks;
    let trackSaved = this.state.playlistTracks.find(track => track.id === trackId);
    if (!trackSaved) {
      tracklist.push(track);
      this.setState({ playlistTracks: tracklist })
    } 
  }

  removeTrack(track) {
    const trackId  = track.id;
    const tracklist = this.state.playlistTracks;
    let trackIndex = this.state.playlistTracks.findIndex(track => track.id === trackId);
    tracklist.splice(trackIndex, 1);
    this.setState({ playlistTracks: tracklist })
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.trackURI);
    return trackURIs;
  }

  search(keyword) {
    Spotify.search(keyword).then(searchResults => {
      this.setState({ searchResults: searchResults });
    })
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Tunes</span></h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist 
              onRemove={this.removeTrack} 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
