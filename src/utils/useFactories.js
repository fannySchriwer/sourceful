import { useState, useEffect } from 'react';
import firebase from '../services/firebase';

export default function useFactories() {
  const [factories, setFactories] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection('factories')
      // add some sorting logic
      // .where("continent", "==", "asia")
      .get()
      .then((querySnapshot) => {
        const newFactories = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFactories(newFactories);
      });

    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when we leave component
    return () => unsubscribe();
  }, []);

  return { factories };
}
