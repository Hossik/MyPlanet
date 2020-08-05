import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
const Menu = ({ open, setOpen }) => {
  
  return (
    <StyledMenu open={open}>
      <Link className="links" to="/about" onClick={() => setOpen(!open)}>
        
      <i class="fas fa-address-card">About</i>
      </Link>
      
      
      <Link  className="links" to="/tools" onClick={() => setOpen(!open)}>
        <i class="fas fa-atom">Works</i>
        
        </Link>
        <Link  className="links" to="/contacts" onClick={() => setOpen(!open)}>
        <i class="far fa-address-book">
        Contact</i>
        </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;