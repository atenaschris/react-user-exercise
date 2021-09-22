import React ,{useEffect,useCallback} from "react";

import { useRouteMatch, useParams } from "react-router";

import { Link,Route } from "react-router-dom";
import UserUpdate from '../components/UserUpdate'

import styled from "styled-components";

import Card from "../components/UI/Card";

import useHttp from "../hooks/use-http";
import { getSingleUser } from "../lib/api";


import LoadingSpinner from "../components/UI/LoadingSpinner";

const DetailPage = () => {
  const match = useRouteMatch();

  const params = useParams();

  const { userId } = params;

  console.log(params);

  console.log(match);

  const { sendRequest, status, error, data } = useHttp(getSingleUser, true);



  useEffect(() => {
    console.log("running");
    sendRequest(userId);
  }, [userId, sendRequest]);
  
  
  const finishSubmittingFormHandler = useCallback(() => {
    console.log("running");
    sendRequest(userId);
  }, [userId, sendRequest]);

  if (status === "pending") {
    return (
      <div style={{ marginTop: "30px" }}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data.name) {
    return <p>No user found</p>;
  }

  return (
    <Card>
      <Wrapper>
        <h1>{data.name}</h1>
        <p>{data.lastName}</p>
        <p>{data.dateOfBirth}</p>
        <p>{data.address}</p>
        <Actions>
          <Link to={`${match.url}/update`}>Update</Link>
          <Link to={`${match.url}/delete`}>Delete</Link>
        </Actions>
        <Route path={`${match.path}/update`}>
        <UserUpdate
          id={userId}
          name={data.name}
          userName={data.lastName}
          dateOfBirth={data.dateOfBirth}
          address={data.address}
          finishSubmittingForm={finishSubmittingFormHandler}
        />
      </Route>
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Actions = styled.div`
width:100%;
display: flex;
justify-content: space-around;
align-items: center;

a{
    text-decoration: none;
    background-color: rgb(0,0,0);
    padding:5px 20px;
    border-radius: 20px;
    color: white;

    &:visited{
        color: white;
    }
}

`;

export default DetailPage;
