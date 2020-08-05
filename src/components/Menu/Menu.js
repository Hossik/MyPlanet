import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
const Menu = ({ open, setOpen }) => {
  
  return (
    <StyledMenu open={open}>
      <Link  to="/home" style={{marginLeft:"30px"}} onClick={() => setOpen(!open)}>

      <i style={{fontSize:"0.8em"}} className="fas fa-home"></i>
      </Link>
      <Link className="links" to="/about" onClick={() => setOpen(!open)}>

      <i className="fas fa-address-card font">About</i>
      </Link>

      <Link  className="links" to="/tools" onClick={() => setOpen(!open)}>
        <i className="fas fa-atom">Works</i>
        </Link>
        
      <Link  className="links" to="/contacts" onClick={() => setOpen(!open)}>
      <i style={{fontWeight:"bold"}} className="far fa-address-book">contact</i>
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;