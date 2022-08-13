import React, { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  GradientBtn,
} from './NavbarElements';


const Navbar = () => {
  const { user , setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const logout = () => {

    console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;", user);
    setUser(null)
    console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;", user);


    navigate("/auth");

   
  
  }
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
        <GradientBtn onClick={logout}>Deconnecter</GradientBtn> 
       
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;