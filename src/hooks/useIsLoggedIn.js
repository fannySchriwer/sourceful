import { useState, useEffect } from 'react';
import firebase from '../services/firebase'
;
require('firebase/auth');

export default function useIsLoggedIn() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedInUser(true);
        setCurrentUser(user);
      }
    });
  }, []);

  return { loggedInUser, currentUser };
}
