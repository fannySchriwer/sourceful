import { useState, useEffect } from 'react';
import firebase from '../services/firebase';

export default function useGetMyFactories() {
  const [factories, setFactories] = useState([]);
  const db = firebase.firestore();

  let query = db.collection('myList');
  
  useEffect(() => {
    const unsubscribe = query
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
  });

  return { factories };
}
