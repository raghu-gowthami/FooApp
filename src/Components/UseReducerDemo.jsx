import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { Button, TextField, Typography, Container } from "@mui/material"; // Import Material-UI components

const UseReducerDemo = () => {
  const [username, setUseName] = useState("");
  const [state, dispatch] = useReducer(reducer, 0);
  const navigate = useNavigate();

  function reducer(state, action) {
    if (action.type === "increment") {
      return state + action.payload;
    }
    if (action.type === "decrement") {
      return state - action.payload;
    }
  }

  function handleClick() {
    navigate("/EdMap/Profile", { state: { username } });
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        UseReducerDemo
      </Typography>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: "increment", payload: 1 })}
          sx={{ marginRight: 2 }}
        >
          Increment
        </Button>
        <Typography variant="h5" component="span" sx={{ marginRight: 2 }}>
          {state}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
        >
          Decrement
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUseName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClick}
        >
          Go to Edu in Profile
        </Button>
      </div>
    </Container>
  );
};

export default UseReducerDemo;