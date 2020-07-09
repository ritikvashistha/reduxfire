import React, { useState } from "react";
import { auth } from "../../configs/firebase.config";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { TextField } from "@material-ui/core";
const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password === passwordConfirmation) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => console.log(user))
        .catch((err) => console.error(err));

      props.history.replace("/");
    } else {
      alert("Password do not match");
    }
  };

  return (
    <Sign className="sign-up">
      <h1 className="heading">Sign Up page</h1>
      <form>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="space"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="space"
          type="password"
          placeholder="Password should be of atleast 8 digits"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="space"
          type="password"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br></br>
        <Button
          variant="contained"
          color="primary"
          className="spaceb"
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </form>
    </Sign>
  );
};

export default withRouter(SignUp);

const Sign = styled.div`
  margin-top: 100px;
  display: block;
  text-align: center;
  .heading {
    font-size: 50px;
    color: green;
  }
  .space {
    width: 300px;

    margin-top: 15px;
  }
  .spaceb {
    margin-top: 20px;
  }
`;
