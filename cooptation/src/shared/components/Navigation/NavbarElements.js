import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #FFF;
  height: 80px;
  display: flex;
  
   
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #15cdfc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #3a3b3c;
  }
`;
export const NavLinks = styled(Link)`
  color: #15cdfc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 1000px 1px #256ce1 inset;
  color: white;
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
   width: 100vw;
  white-space: nowrap;  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  justify-content: flex-end;
  width: 200vw; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const myCenter = styled.div`

align-items: center;
`;

 

export const NavBtnLink = styled(Link)`
 
  border-radius: 10rem;
  padding: 5px 12px;
  width: 12rem;
  font-size: 1rem;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /*added */

  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #1CD8D2 0%, #93EDC7  0%, #1CD8D2  100%);
  margin: 10px;
  padding: 15px 45px;
  box-shadow: 0 0 3px #eee;
  display: block;

  /* Second Nav */
  margin-left: 24px;
  &:hover {
    background: linear-gradient(to right, #1CD8D2 100%, #93EDC7  20%, #1CD8D2  80%);
    color: black;
    /*added */
    color: red;
    color: #fff;
   
    background-position: right center;
  }
`;