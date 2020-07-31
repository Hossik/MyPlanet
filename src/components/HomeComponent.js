import React, { Component } from 'react';
import Typist from 'react-typist';
import './text.scss';
import { Link } from 'react-router-dom';

export class Home extends Component {
  state ={
    renderMsg: false
  }
 
  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }
  render(){
  return (
      <div className="page"> 
           
        <Typist 
          className="TypistExample-header"
          avgTypingDelay={40}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}
          cursor={{ hideWhenDone: true }}>
            HELLO, I'M Hossik
        </Typist>
          
        <div >
          {this.state.renderMsg ? (
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
            >
              <span className="star">*</span>I am a Front-end engineer
              <Typist.Delay ms={1250} />
              <br />
              <span className="star">*</span>UX/UI Web Designer
              <Typist.Delay ms={1250} />
              <br />
              <span className="star">*</span> Live and work in <Typist.Delay ms={500} />Ukraine
              <Typist.Backspace count={7} delay={1000} />
              <Typist.Delay ms={750} />
              Kyiv
              <Typist.Delay ms={1250} /> 
              <br /><br /><br />
              <span >for more information < Link to="/about" style={{color:'#FFDC00', textDecoration:"none"}}>*About <span className="flash" to={"/aboutMe"} ><img id="man" alt="hossik" src="https://raw.githubusercontent.com/Hossik/Profilio/master/public/assets/hossik.jpeg" /></span></Link></span>
              
              {''}
            </Typist>
          ) : null }
        </div>
        
      </div>
    )
  }
}
export default Home;