import React, {
 useState, useEffect, useContext, createContext 
} from 'react';
import PropTypes from 'prop-types';
import firebase from '../services/firebase';

require('firebase/auth');

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

function useProvideAuth() {
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
        console.log(errorMessage);
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
        console.log(errorMessage);
      });

  const signout = () => firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(false);
      });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
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

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
