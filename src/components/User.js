import React from "react";
import styled from "styled-components";
import Card from "./UI/Card";
import { Link } from "react-router-dom";

const User = (props) => {
  const { name, userName, dateOfBirth, address, id } = props;
  return (
    <Card>
      <Wrapper>
        <h1>Name:{name}</h1>
        <p>UserName:{userName}</p>
        <p>DateOfBirth:{dateOfBirth}</p>
        <p>Address:{address}</p>
        <Link to={`/detail/${id}`} className="btn">
          View Fullscreen
        </Link>
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column ;
 

  a {
    text-decoration: none;
    text-align: center;
    background-color: rgb(0, 0, 0);
    border-radius: 20px;
    padding: 5px 20px;
    color: white;
    &:visited{
      color: white;
    }
  }
`;

export default User;
