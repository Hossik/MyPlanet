import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Burger, Menu } from './';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';

function Header(props) {
    const [open, setOpen] = useState(true);
    const [close, setClose] = useState(false);

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    console.log("props.width",props.width)
    return (
  
    <ThemeProvider theme={theme} >
       
      <>  
        <div id="head" ref={node} >
        
        <Burger  open={props.width>835? open : close} setOpen={props.width>835?setOpen : setClose} />
        <Menu  open={props.width>835? open : close} setOpen={props.width>835?setOpen : setClose} />
      
      
        </div>
      </>
      
    </ThemeProvider>
  
    );
  }

export default Header;