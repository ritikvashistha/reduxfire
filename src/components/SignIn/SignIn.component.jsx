import React, { useState } from "react";
import { auth } from "../../configs/firebase.config";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.error(err));
  };

  return (
    <Sign className="sign-in">
      <h1 className="heading">Sign in page</h1>
      <form>
        <input
          className="space"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="space"
          type="password"
          placeholder="Password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="spaceb"
          variant="contained"
          color="primary"
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </form>
    </Sign>
  );
};

export default SignIn;

const Sign = styled.div`
  margin-top: 100px;
  .heading {
    font-size: 50px;
    color: green;
  }
  .space {
    margin-left: 50px;
    width: 300px;
    height: 25px;
  }
  .spaceb {
    margin-left: 50px;
  }
`;
