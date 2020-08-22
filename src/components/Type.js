import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

import './text.scss';

export const TypistText = (props) => {
    const [renderMsg, setrenderMsg] = useState(false);

      const onHeaderTyped = (props) => {
        setrenderMsg(true );
      }

      return(
    <div className="page">
        
      {props.collapseID? 
      <Typist 
        className="TypistExample-header"
        avgTypingDelay={(props.width<600 && props.orientation !== undefined)? 140:(props.width<960 && props.height<600 && props.orientation !== 0 && props.orientation !== undefined)?140:20}
        
        onTypingDone={onHeaderTyped}
        cursor={{ hideWhenDone: true }}>
          <div>HELLO, I'm Hossik</div>
      </Typist> : null}
        
      <div className="marginMessage">
        {
        
        renderMsg ? props.collapseID ?(
          <div>
          <Typist
            className="TypistExample-message"
            cursor={{ show: false }}
            startDelay={2000}
            avgTypingDelay={(props.width<600 && props.orientation !== undefined)? 140 :(props.width<960 && props.height<600 && props.orientation !== 0 && props.orientation !== undefined)? 140 : 70}
          >
            { (props.width<600 && props.orientation !== undefined) || (props.width<960 && props.height<600 && props.orientation !== 0 && props.orientation !== undefined) ?
            <div><span className="star">*</span> I am a Front-end engineer
            <Typist.Delay ms={1250} />
            <br />
            <span className="star">*</span>UI/UX Web Designer
            <Typist.Delay ms={1250} />
            <br />
            <span className="star">*</span>Live &#38; Work in Kyiv
            <Typist.Delay ms={1250} /> 
          
            <div className="more">For more information < Link to="/about" style={{color:'#FFDC00', textDecoration:"none"}}><br/><span className="flash"  >please visit </span></Link></div>
            </div>
            :
            <div><span className="star">*</span> I am a Front-end engineer
            <Typist.Delay ms={1250} />
            <br />
            <span className="star">*</span>UI/UX&nbsp; Web &nbsp; Designer
            <Typist.Delay ms={1250} />
            <br />
            <span className="star">*</span> Live &#38; Work in Kyiv
            <Typist.Delay ms={1250} /> 
            
            <div className="more">For more information < Link to="/about" style={{color:'orange', textDecoration:"none"}} className="flash" >please visit </Link></div>
            </div>
            }
            {''}
          </Typist>
          
          </div>
        ) : null : null}
      </div>
        
   
  </ div>)
  }
  export default TypistText;