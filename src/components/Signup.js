/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useContext } from 'react';
import useModal from '../hooks/useModal';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PrimaryButton from './PrimaryButton';
import { ToggleContext } from './ToggleContext';
import { useAuth } from '../hooks/useAuth';

const SignUp = () => {
	const auth = useAuth();
	const { closeNavigation } = useContext(ToggleContext);
	const [ modalOpen, setModalOpen, closeModal ] = useModal();
	const [ errors, setErrors ] = useState('');
	const [ signupUser, setSignupUser ] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	function handleChange(event) {
		event.preventDefault();
		const { value } = event.target;
		setSignupUser({
			...signupUser,
			[event.target.name]: value
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		auth.signup(signupUser.email, signupUser.password).then((response) => {
			if (response.uid) {
				console.log('success, close modal or redirect');
				closeModal();
				setTimeout(closeNavigation, 500);
			} else {
				setErrors(response);
			}
		});
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								color="primary"
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								onChange={handleChange}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<div
						sx={{
							marginTop: [ 3, 4 ]
						}}
					>
						<PrimaryButton propFunction={handleSubmit}>Sign up</PrimaryButton>
					</div>
					{errors && (
						<p
							sx={{
								color: '#f50057'
							}}
						>
							{String(errors)}
						</p>
					)}
				</form>
			</div>
		</Container>
	);
};

export default SignUp;
