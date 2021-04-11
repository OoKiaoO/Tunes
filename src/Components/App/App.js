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
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
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
    const trackURIs = this.state.playlistTracks.map(track => track.URI);
    const playlistName = this.state.playlistName;
    console.log("before saving");
    Spotify.savePlaylist(playlistName, trackURIs); //.then(() => {
    console.log("before set state");
    this.setState({
      playlistName: 'My Playlist',
      playlistTracks: []
    });
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
              onSave={this.savePlaylist}
              test={console.log('rendering Playlist component')} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
