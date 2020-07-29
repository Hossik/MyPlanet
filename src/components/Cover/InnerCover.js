import Main from '../Main';
import React from 'react';

import {  CSSTransition }from 'react-transition-group';



import { BannerImage } from './Banner';

const hossik = ["MY PLANET"]
const welcome = ["WELCOME TO"]

 const InnerCover = (props) => {
   
    return(
        
    
    <div className="light-overlay">
    
    
    <div className ="landing-inner">

     
          
          <BannerImage />
          
          
          
          <div className='inner'>
      
            <Main className="hoss"  />
    <button style={{background:"red"}}></button>
        <CSSTransition
          in={props.titletime}
          timeout={300}
          classNames="alertup"
          unmountOnExit
          appear     
        >
              <section  id= "up" className="linetext">
              {welcome}
              </section>
              </CSSTransition>
              <CSSTransition
          in={props.titletime}
          timeout={300}
          classNames="alertdown"
          unmountOnExit
          appear     
        >
              <section id="down" className="linetext">
              {hossik}      
              </section>
              </CSSTransition> 
             
          </div>
          </div>
          
</div>
   
   
    )
  
  }

export default InnerCover