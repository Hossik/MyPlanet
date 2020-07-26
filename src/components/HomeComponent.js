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
              * Easy to style
              <Typist.Delay ms={1250} />
              <br />
              * Easy to customize
              <Typist.Delay ms={1250} />
              <br />
              * Easy to use backp<Typist.Delay ms={500} />sace
              <Typist.Backspace count={5} delay={1000} />
              <Typist.Delay ms={750} />
              space
              <Typist.Delay ms={1250} /> 
              <br />
              <span >for more information < Link style={{color:'#FFDC00', textDecoration:"none"}}>*About me <span className="flash" to={"/aboutMe"} ><img id="man" alt="hossik" src="https://raw.githubusercontent.com/Hossik/Profilio/master/public/assets/hossik.jpeg" /></span></Link></span>
              
              {''}
            </Typist>
          ) : null }
        </div>
        
      </div>
    )
  }
}
export default Home;