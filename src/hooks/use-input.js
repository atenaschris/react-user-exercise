import { useReducer, useState, useEffect } from "react";
const useInput = (validateEnteredValue) => {
  const [error, setError] = useState(undefined);

  const initialState = {
    value: "",
    isValid: undefined,
    inTouched: undefined,
  };

  const inputReducer = (state, action) => {
    if (action.type === "SET_INPUT") {
      return {
        value: action.val,
        isValid: validateEnteredValue(action.val),
        isTouched: true,
      };
    }

    if (action.type === "BLUR_INPUT") {
      return {
        value: state.value,
        isValid: state.isValid,
        isTouched: true,
      };
    }

    return initialState;
  };

  const [inputState, dispatchInputState] = useReducer(
    inputReducer,
    initialState
  );

  const setInput = (e) => {
    dispatchInputState({ type: "SET_INPUT", val: e.target.value });
  };

  const blurInput = () => {
    dispatchInputState({ type: "BLUR_INPUT" });
  };
  const reset = () => {
    dispatchInputState({ type: "RESET" });
  };

  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(!isValid && isTouched);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [isValid, isTouched]);

  return {
    value,
    isValid,
    error,
    setInput,
    blurInput,
    reset,
  };
};

export default useInput;
