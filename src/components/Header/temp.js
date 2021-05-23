import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import { increment, decrement } from "./headerSlice";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
    </>
  );
};

export default Home;
