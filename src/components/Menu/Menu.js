import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';
const Menu = ({ open, setOpen }) => {
  
  return (
    <StyledMenu open={open}>
      <NavLink  className="links" to="/home" style={{fontSize:"0.8em",textAlign:'center',margin:'0'}}  activeStyle={{color: "#61005c"}} onClick={() => setOpen(!open)}>

      <i  className="fas fa-home"></i>
      </NavLink>
      <NavLink activeStyle={{color: "#61005c"}} className="links" to="/about" onClick={() => setOpen(!open)}>
<i className="fas fa-address-card font"></i>&nbsp; &nbsp;About
      
      </NavLink>

      <NavLink  activeStyle={{color: "#61005c"}} className="links" to="/tools" onClick={() => setOpen(!open)}>
      <i  className="fas fa-atom"></i> &nbsp; &nbsp;Works 
        </NavLink>
        
      <NavLink  activeStyle={{color: "#61005c"}} style={{     whiteSpace: "nowrap"
}} className="links" to="/contacts" onClick={() => setOpen(!open)}>
     <i class="fas fa-address-book"></i>&nbsp;	contact 
      </NavLink>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;