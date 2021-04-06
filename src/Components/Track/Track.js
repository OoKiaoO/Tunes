import React from 'react';
import './Track.css';

class Track extends React.Component {
  renderAction() {
      return <button className="Track-action">{ isRemoval ? '-' : '+' }</button>;
    }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{Track.name}</h3>
          <p>{Track.artist} | {Track.artist}</p>
        </div>
        <button className="Track-action"></button>
      </div>
      )
    }
  }

export default Track;
