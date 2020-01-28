import { useState, useEffect } from 'react';
import firebase from '../services/firebase';

export default function useNextPagination(lastDoc) {
	const [paginatedFactories, setFactories] = useState([]);
  const [lastDocState, setLastDoc] = useState(lastDoc);
  const db = firebase.firestore();

  let query = db.collection('factories');
  
  useEffect(() => {
    const unsubscribe = query
      .orderBy("name")
      .startAfter(lastDocState)
      .limit(15)
      .get()
      .then((querySnapshot) => {
        const newFactories = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
				}));
				const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
        setLastDoc(lastVisible);
        setFactories(newFactories);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  
      // returning the unsubscribe function will ensure that
      // we unsubscribe from document changes when we leave component
      return () => unsubscribe;
  });

  return { paginatedFactories, lastDocState };
}
