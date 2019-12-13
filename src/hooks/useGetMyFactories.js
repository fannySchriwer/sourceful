import { useState, useEffect } from 'react';
import firebase from '../services/firebase';

export default function useGetMyFactories(userID) {
  const [factories, setFactories] = useState([]);
  const db = firebase.firestore();

  let query = db.collection('myList');

  getFactoriesWithID();
  
  
  function getFactoriesWithID(){
    query
      .where('userID', '==', userID)
      .get()
      .then((querySnapshot) => {
        const newFactories = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFactories(newFactories);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });

  }
  
  /*query
      .where('userID', '==', userID)
      .get()
      .then((querySnapshot) => {
        const newFactories = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setFactories(newFactories);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });

    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when we leave component
    return () => unsubscribe;
  }); */
  return { factories };
}
