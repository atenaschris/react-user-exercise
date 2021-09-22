import React, { useEffect, useCallback } from "react";

import { useRouteMatch, useParams } from "react-router";

import { Link, Route } from "react-router-dom";
import UserUpdate from "../components/UserUpdate";

import styled from "styled-components";

import Card from "../components/UI/Card";

import { useHistory } from "react-router";

import useHttp from "../hooks/use-http";
import { getSingleUser, deleteUser } from "../lib/api";

import LoadingSpinner from "../components/UI/LoadingSpinner";

const DetailPage = () => {
  const history = useHistory();

  const match = useRouteMatch();

  const params = useParams();

  const { userId } = params;

  console.log(params);

  console.log(match);

  const {
    sendRequest: getSingleUserRequest,
    status: singleUserStatus,
    error: singleUserError,
    data: singleUserData,
  } = useHttp(getSingleUser, true);

  const {
    sendRequest: deleteUserRequest,
    status: deleteUserStatus,
    error: deleteUserError,
    data: deleteUserData,
  } = useHttp(deleteUser);

  const deleteUserHandler = () => {
    console.log(history);
    deleteUserRequest(userId);
   
  };

  useEffect(() => {
    if (deleteUserStatus === "completed") {
      history.push("/");
    }
  }, [deleteUserStatus]);

  useEffect(() => {
    console.log("running");
    getSingleUserRequest(userId);
  }, [userId, getSingleUserRequest]);

  const finishSubmittingFormHandler = useCallback(() => {
    console.log("running");
    getSingleUserRequest(userId);
  }, [userId, getSingleUserRequest]);

  if (singleUserStatus === "pending") {
    return (
      <div style={{ marginTop: "30px" }}>
        <LoadingSpinner />
      </div>
    );
  }

  if (deleteUserStatus === "pending") {
    return (
      <div style={{ marginTop: "30px" }}>
        <LoadingSpinner />
      </div>
    );
  }

  if (singleUserError) {
    return <p>{singleUserError}</p>;
  }

  if (deleteUserError) {
    return <p>{singleUserError}</p>;
  }

  if (!singleUserData.name) {
    return <p>No user found</p>;
  }

  return (
    <Card>
      <Wrapper>
        <h1>{singleUserData.name}</h1>
        <p>{singleUserData.lastName}</p>
        <p>{singleUserData.dateOfBirth}</p>
        <p>{singleUserData.address}</p>
        <Actions>
          <Link to={`${match.url}/update`}>Update</Link>
          <Button onClick={deleteUserHandler}>Delete</Button>
        </Actions>
        <Route path={`${match.path}/update`}>
          <UserUpdate
            id={userId}
            name={singleUserData.name}
            userName={singleUserData.lastName}
            dateOfBirth={singleUserData.dateOfBirth}
            address={singleUserData.address}
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
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    background-color: rgb(0, 0, 0);
    padding: 5px 20px;
    border-radius: 20px;
    color: white;

    &:visited {
      color: white;
    }
  }
`;

const Button = styled.button`
  background-color: rgb(0, 0, 0);
  padding: 8px 25px;
  border-radius: 20px;
  color: white;
  border: none;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default DetailPage;
