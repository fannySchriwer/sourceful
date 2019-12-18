import React, { useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import firebase from '../services/firebase';

const userContext = createContext({
	user: null
});

export const useSession = () => {
	const { user } = useContext(userContext);
	return user;
};

export const useAuthantification = () => {
	const [ state, setState ] = React.useState(() => {
		const user = firebase.auth().currentUser;
		return { initializing: !user, user };
	});
	function onChange(user) {
		setState({ initializing: false, user });
	}

	useEffect(() => {
		// listen for auth state changes
		const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
		// unsubscribe to the listener when unmounting
		return () => unsubscribe();
	}, []);

	return state;
};

const authContext = createContext();

function useProviderAuth() {
	const [ currentUser, setCurrentUser ] = useState(null);

	const signin = (email, password) =>
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((response) => {
				setCurrentUser(response.user);
				return response.user;
			})
			.catch((error) => {
	      const errorMessage = error.message;
				return errorMessage;
			});

	const signup = (email, password) =>
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				return firebase.firestore().collection('users').doc(response.user.uid).set({
					userId: response.user.uid,
					email: response.user.email
				});
			})
			.then(() => {
				setCurrentUser(response.user);
				return response.user;
			})
			.catch((error) => {
	      const errorMessage = error.message;
				return errorMessage;
			});

	const signout = () =>
		firebase.auth().signOut().then(() => {
			setCurrentUser(null);
		});

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, []);

	// Return the user object and auth methods
	return {
		currentUser,
		signin,
		signup,
		signout
	};
}

// Provider component that wraps your app and makes auth object ...
// available to any child component that calls useAuth().
export function ProviderAuth({ children }) {
	const auth = useProviderAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// and re-render when it changes.
export const useAuth = () => useContext(authContext);

ProviderAuth.propTypes = {
	children: PropTypes.node.isRequired
};
