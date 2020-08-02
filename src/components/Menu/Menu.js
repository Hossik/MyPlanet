import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
const Menu = ({ open, setOpen }) => {
  
  return (
    <StyledMenu open={open}>
      <Link className="links" to="/about" onClick={() => setOpen(!open)}>
        
        <span  id="fo">About</span><img id="me" alt="hossik" src="https://raw.githubusercontent.com/Hossik/Profilio/master/public/assets/hossik.jpeg" />
      </Link>
      
      
      <Link  className="links" to="/tools" onClick={() => setOpen(!open)}>
        <i class="fas fa-atom"></i>
        Works
        </Link>
        <Link  className="links" to="/contacts" onClick={() => setOpen(!open)}>
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;