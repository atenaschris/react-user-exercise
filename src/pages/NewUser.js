import React from "react";

import AddUserForm from "../components/AddUserForm";

import useHttp from "../hooks/use-http";

import { addUser } from "../lib/api";

import { useEffect } from "react";
import { useHistory } from "react-router";

const NewQuote = () => {
  const history = useHistory();
  const { status, sendRequest, error, data } = useHttp(addUser);

  const addUserHandler = (user) => {
    sendRequest(user);
  };

  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [status]);

  return <AddUserForm isLoading={status==='pending'} onAddUser={addUserHandler} />;
};

export default NewQuote;
