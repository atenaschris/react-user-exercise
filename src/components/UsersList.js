import React, { useEffect } from "react";
import styled from "styled-components";
import useHttp from "../hooks/use-http";
import { getAllUsers } from "../lib/api";
import User from "../components/User";
import LoadingSpinner from "./UI/LoadingSpinner";

const UsersList = () => {
  const {
    sendRequest,
    error,
    status,
    data: loadedUsers,
  } = useHttp(getAllUsers, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div style={{marginTop:"20px"}}>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedUsers || loadedUsers.length === 0)) {
    return <p className="error">No users found!!! Start adding new users</p>;
  }

  return (
    <List>
      {loadedUsers.map((user, i) => (
        <User
          id={user.id}
          key={i}
          name={user.name}
          userName={user.lastName}
          dateOfBirth={user.dateOfBirth}
          address={user.address}
        />
      ))}
    </List>
  );
};

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

export default UsersList;
