/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PrimaryButton from './PrimaryButton';
import validate from './FormValidationRules';
import { useAuth } from '../hooks/useAuth';

const Login = ({ propFunction }) => {
  const auth = useAuth();
	const [errors, setErrors] = useState('');
	const [ loginUser, setLoginInfo ] = useState({
		email: '',
		password: ''
	});

	function handleChange(event) {
		event.preventDefault();
		const { value } = event.target;
		setLoginInfo({
			...loginUser,
			[event.target.name]: value
		});
	}

  //takes state values and runs firebase login
  //
	function handleSubmit(event) {
		event.preventDefault();
		setErrors(validate(loginUser));
    auth.signin(loginUser.email, loginUser.password).then((response) => {
      if (response.uid) {
        propFunction();
      } else {
        setErrors(response);
      }
    });
    console.log(errors);
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
					<PrimaryButton propFunction={handleSubmit}>Sign In</PrimaryButton>
				</form>
				{errors && (
					<p sx={{
            color: 'red'
          }}>
						{String(errors)}
					</p>
				)}
			</div>
		</Container>
	);
};

export default Login;
