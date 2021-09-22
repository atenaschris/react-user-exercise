import React from "react";

import { useRouteMatch, useParams } from "react-router";

import styled from "styled-components";

import Card from "../components/UI/Card";

import useHttp from "../hooks/use-http";
import { getSingleUser } from "../lib/api";

import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DetailPage = () => {
  const match = useRouteMatch();

  const params = useParams();

  const { userId } = params;

  console.log(params);

  console.log(match);

  const {
    sendRequest,
    status,
    error,
    data,
  } = useHttp(getSingleUser, true);

  useEffect(() => {
      console.log('running');
    sendRequest(userId);
  }, [userId, sendRequest]);

  if (status==='pending') {
      return <LoadingSpinner/>
  }

  if (error) {
      return <p>{error}</p>
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

export default DetailPage;
