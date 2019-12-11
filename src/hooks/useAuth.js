import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import PropTypes from 'prop-types';
import firebase from '../services/firebase';

const authContext = createContext();

function useProviderAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  const signin = (email, password) => firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      setCurrentUser(response.user);
      console.log(response.user);
      return response.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });

  const signup = (email, password) => firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      console.log('Successfully created new user:', response.user.email);
      setCurrentUser(response.user);
      return response.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });

  const signout = () => firebase
    .auth()
    .signOut()
    .then(() => {
      setCurrentUser(false);
    });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log('from auth');
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(false);
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
    signout,

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
  children: PropTypes.node.isRequired,
};
