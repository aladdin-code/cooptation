import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
       <h1>YOUR LOGO</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/offers' activeStyle>
            Les Offers
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>   
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
        <NavBtn>
      
        <NavBtnLink to='/auth'>S'authentifier</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;