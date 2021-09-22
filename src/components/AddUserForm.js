import styled from "styled-components";
import Card from "./UI/Card";
import useInput from "../hooks/use-input";

const AddUserForm = () => {
  const validateValue = (value) => {
    return value.trim() !== "" && value.trim().length < 30;
  };

  const {
    value: nameValue,
    isValid: nameIsValid,
    error: nameHasError,
    setInput: setInputName,
    blurInput: blurInputName,
    reset: resetInputName,
  } = useInput((value) => validateValue(value));

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    error: lastNameHasError,
    setInput: setInputLastName,
    blurInput: blurInputLastName,
    reset: resetInputLastName,
  } = useInput((value) => validateValue(value));

  const {
    value: dateOfBirthValue,
    isValid: dateOfBirthIsValid,
    error: dateOfBirthHasError,
    setInput: setInputDateOfBirth,
    blurInput: blurInputDateOfBirth,
    reset: resetInputDateOfBirth,
  } = useInput((value) => validateValue(value));

  const {
    value: addressValue,
    isValid: addressIsValid,
    error: addressHasError,
    setInput: setInputAddress,
    blurInput: blurInputAddress,
    reset: resetInputAddress,
  } = useInput((value) => validateValue(value));

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && dateOfBirthIsValid && addressIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const user = {
      name: nameValue,
      lastName: lastNameValue,
      dateOfBirth: dateOfBirthValue,
      address: addressValue,
    };

    console.log(user);

    

    resetInputName();
    resetInputLastName();
    resetInputDateOfBirth();
    resetInputAddress();
  };

  const errorMessage =
    "The value should not be empty and the number of chars should be less than 30";

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <GroupControls>
          <label>Name</label>
          <input
            value={nameValue}
            type="text"
            onChange={setInputName}
            onBlur={blurInputName}
          />
        </GroupControls>
        {nameHasError && <p className="error">{errorMessage}</p>}
        <GroupControls>
          <label>Last Name</label>
          <input
            value={lastNameValue}
            type="text"
            onChange={setInputLastName}
            onBlur={blurInputLastName}
          />
        </GroupControls>
        {lastNameHasError && <p className="error">{errorMessage}</p>}
        <GroupControls>
          <label>Date of Birth</label>
          <input
            value={dateOfBirthValue}
            type="text"
            onChange={setInputDateOfBirth}
            onBlur={blurInputDateOfBirth}
          />
        </GroupControls>
        {dateOfBirthHasError && <p className="error">{errorMessage}</p>}
        <GroupControls>
          <label>Address</label>
          <input
            value={addressValue}
            type="text"
            onChange={setInputAddress}
            onBlur={blurInputAddress}
          />
        </GroupControls>
        {addressHasError && <p className="error">{errorMessage}</p>}
        <GroupActions disabled={!formIsValid} type="submit">
          Add{" "}
        </GroupActions>
      </Form>
    </Card>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GroupControls = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;

  label {
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-size: 17px;
  }
  input {
    border: 2px solid black;
    width: 100%;
    outline: 0;
    box-shadow: none;
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 10px;
    font-size: 17px;
  }
`;

const GroupActions = styled.button`
  padding: 5px 50px;
  border-radius: 20px;
  border: 1px solid transparent;
  letter-spacing: 1.5px;
  font-size: 17px;

  &:hover {
    background-color: rgb(200, 200, 200, 0.8);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default AddUserForm;
