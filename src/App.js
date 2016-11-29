import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack() {
      console.log('addTrack', this.trackInput.value);
      this.props.onAddTrack(this.trackInput.value);
      this.trackInput.value = '';
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div>
        <input type="text" ref={(input) => { this.trackInput = input }} />
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName });
    }
  })
)(App);
