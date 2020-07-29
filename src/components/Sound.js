
import React, { Component } from 'react';

import ReactPlayer from 'react-player'





export class Sound extends Component {
  
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.play = this.play.bind(this);
        
        this.state = {
          currentImage: 0,
          play:false,
          back:false,
          textIndex: 0,
          titletime :false,
          player : false,
          helpplayer:false,
          duration: 0,
          ready: false,
          muted:false,
          pause:false,
          images: [
            
            "https://soundcloud.com/scumgang6ix9ine/yaya-6ix9ine",
            "https://www.youtube.com/watch?v=SBtjfadiyfk&feature=youtu.be"

          ]
        };
      }
      remove = () => { 
        clearInterval(this.intervalID)
      }
      removetitle = () => { 
        clearInterval(this.intervalTITLE)
      }
      removertitle = () => { 
        clearInterval(this.intervalRTITLE)
      }
      removeplayer = () => {
        clearInterval(this.intervalPlayer)
      }
       
    componentDidMount() {
      this.intervalplay = setInterval(() => {
        this.setState({
            pause: true,
        });
        }, 5000);
        this.intervalID = setInterval(() => {
        this.setState({
            textIndex: this.state.textIndex + 1,
        });
        }, 9900);
        this.intervalTITLE = setInterval(() => {this.setState({
          titletime: true
        }); }, 2000);
        this.intervalRTITLE = setInterval(() => {this.setState({
          titletime: false
        }); }, 8000);
        this.intervalPlayer = setInterval(() => {this.setState({
          player: true
        }); }, 10000);
        this.intervalHelpPlayer = setInterval(() => {this.setState({
          helpplayer: true
        }); }, 12000);
        
        setInterval (this.remove);
        setInterval (this.removetitle, 6000);
        setInterval (this.removertitle, 17000);

    }




  switchImage() {
        
    if (this.state.currentImage < this.state.images.length - 1 ) {
      this.setState({
        currentImage: this.state.currentImage + 1,
        ready:false,
        pause:true
            })
    } else {
      this.setState({
        currentImage: 0,
        ready:false,
        pause:true
      });
    }
    return this.currentImage;
  }
    
   
    play = () => {
  this.setState(state => ({
    play: !state.play,
    ready: false
  }))
  }

  muted = () => {
    this.setState(state => ({
      muted: !state.muted
    }))
    }

  handleDuration = (duration) => {
    
    this.setState({ duration })
  }
      
ready = () => {
  this.setState ({
    ready:true
  })
}
pause = () => {
  this.setState(state => ({
    pause: !state.pause
  }))
  }
    render() {
        return (
          
        
        
        
        
        <div className='player-wrapper'>
        <ReactPlayer
       onPlay={this.ready}
          className='react-player'
          onError={this.switchImage}
          onEnded={this.switchImage}
          url={this.state.images[this.state.currentImage]}
          width='0vw'
          height='0vh'
          onDuration={this.handleDuration}
          volume= "0.5"
          muted={this.state.muted}
          playing={this.props.play}
          allow="autoplay"
        />
      </div>)
    }
}

export default Sound