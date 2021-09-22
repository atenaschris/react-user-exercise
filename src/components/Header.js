import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const  Header = () => {
  return (
    <Nav>
      <LinkGroup>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </LinkGroup>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  background-color: rgb(200,200,200);
  
`;

const LinkGroup = styled.ul`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
margin:0 auto;

a{
    text-decoration: none;
    color:rgba(0,0,0,0.5);
    transition:all 0.4s ease;

    &:hover{
        color:rgb(0,0,0);
    }
}



`;


export default Header;

