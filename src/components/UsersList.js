import React, { useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllUsers } from "../lib/api";
import User from "../components/User";
import LoadingSpinner from "./UI/LoadingSpinner";

const {
  sendRequest,
  error,
  status,
  data: loadedQuotes,
} = useHttp(getAllUsers, true);

useEffect(() => {
  sendRequest();
}, [sendRequest]);

const UsersList = () => {
  if (status === "pending") {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <p>No quotes found!!!</p>;
  }

  return (
    <List>
      {loadedQuotes.map((user, i) => (
        <User
          key={i}
          name={user.name}
          userName={user.username}
          dateOfBirth={user.dateOfBirth}
          address={user.address}
        />
      ))}
    </List>
  );
};

export default UsersList;
