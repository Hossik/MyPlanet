import React from 'react';
import Sound from 'react-sound';
 
export class ComponentSound extends React.Component {
  render() {
    return <Sound url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    playStatus={Sound.status.PLAYING}
    playFromPosition={300 /* in milliseconds */}
    onLoading={this.handleSongLoading}
    onPlaying={this.handleSongPlaying}
    onFinishedPlaying={this.handleSongFinishedPlaying} />
  }
}
export default ComponentSound;