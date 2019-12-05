import { useState, useEffect } from 'react';
import firebase from '../services/firebase';
require('firebase/auth');

export default function useIsLoggedIn() {
    const [loggedInUser, setLoggedInUser] = useState({
        loggedIn: false,
        loggedInEmail: ''
    });
    
    useEffect(() => {
        const auth = firebase.auth();

        auth.onAuthStateChanged(user => {
            if(user) {
                setLoggedInUser({
                    loggedIn: true,
                    loggedInEmail
                });
            }
        })
    });

    return { loggedInUser };
}