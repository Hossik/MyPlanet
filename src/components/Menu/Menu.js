import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link className="links" to="/about">
        <img id="me" alt="hossik" src="https://raw.githubusercontent.com/Hossik/Profilio/master/public/assets/hossik.jpeg" /><br/>
        About me
      </Link>
      
      
      <Link  className="links" to="/tools">
        <i class="fas fa-atom"></i>
        Works
        </Link>
        <Link  className="links" to="/contacts">
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