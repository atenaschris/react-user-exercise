import React from "react";
import styled from "styled-components";
import Header from "../Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Main> {props.children}</Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: rgb(0,0,0);
  
`;

export default Layout;
