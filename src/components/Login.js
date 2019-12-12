import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PrimaryButton from './PrimaryButton';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const auth = useAuth();
  const [loginUser, setLoginInfo] = useState({
    email: '',
    password: '',
  });

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
    auth.signin(loginUser.email, loginUser.password);
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
            id="signinemail"
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
            id="signinpassword"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <PrimaryButton propFunction={handleSubmit} label="Sign in" />
        </form>
        {auth.currentUser && (
          <p>
            Hey
            {auth.currentUser.email}
          </p>
        )}
      </div>
    </Container>
  );
}

export default Login;
