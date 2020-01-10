/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useContext, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PrimaryButton from './PrimaryButton';
import { useAuth } from '../hooks/useAuth';
import { ToggleContext } from './ToggleContext';
import { graphql, useStaticQuery } from 'gatsby';
import SignUp from './Signup';

const Login = ({ propFunction }) => {
	const { datoCmsHelperText } = useStaticQuery(
		graphql`
			query {
				datoCmsHelperText {
					signInBtnText
				}
			}
		`
	);

	const { signInBtnText } = datoCmsHelperText;
	const auth = useAuth();
	const { closeNavigation } = useContext(ToggleContext);
	const [ openSignUp, setOpenSignUp ] = useState(false);
	const [ errors, setErrors ] = useState('');
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

	function showSignUpForm() {
		console.log('whyyyy');
		setOpenSignUp(true);
	}

	//runs firebase login on click
	//closes modal on success and shows error on fail
	function handleSubmit(event) {
		event.preventDefault();
		auth.signin(loginUser.email, loginUser.password).then((response) => {
			if (response.uid) {
				propFunction();
				setTimeout(closeNavigation, 500);
			} else {
				setErrors(response);
			}
		});
	}

	return (
		<Fragment>
			{openSignUp ? (
				<SignUp />
			) : (
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<div>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<Typography component="p" variant="caption">
							Log in to access our agenda-setting content. Don't have an account?
							<span role="button" onClick={showSignUpForm} sx={{ color: 'primary', fontStyle: 'italic' }}>
								Sign up here
							</span>
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
							<PrimaryButton propFunction={handleSubmit}>{signInBtnText}</PrimaryButton>
						</form>
						{errors && (
							<p
								sx={{
									color: '#f50057'
								}}
							>
								{String(errors)}
							</p>
						)}
					</div>
				</Container>
			)}
		</Fragment>
	);
};

export default Login;
