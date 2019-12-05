import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebase from '../services/firebase';
import PrimaryButton from "./PrimaryButton"
;
require('firebase/auth');

function Login() {
  const [loginUser, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const auth = firebase.auth();

  function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    setLoginInfo({
      ...loginUser,
      [event.target.name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(loginUser.email, loginUser.password)
      .then((cred) => {
        console.log(cred.user);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <PrimaryButton propFunction={handleSubmit} label="Sign in" />
        </form>
      </div>
    </Container>
  );
}

export default Login;
