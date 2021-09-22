import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 20px auto 20px auto;
  background-color: white;
  border: 2px solid rgb(0,0,0.0,4);
  width: 70%;
  max-width: 40rem;
  border-radius: 10px;
  padding: 20px;
`;

export default Card;
