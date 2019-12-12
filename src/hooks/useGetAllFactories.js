import { useState, useEffect } from 'react';
import firebase from '../services/firebase';

export default function useGetAllFactories(filters) {
  const [factories, setFactories] = useState([]);
  const db = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  db.settings(settings);
  let query = db.collection('factories');
  if (filters.continent) {
    query = query.where('continent', '==', `${filters.continent}`);
  }
  if (filters.category) {
    query = query.where(`category.${filters.category}`, '==', true);
  }
  if (filters.productType) {
    query = query.where(
      'producttype',
      'array-contains',
      `${filters.productType}`,
    );
  }
  if (filters.quantity && filters.quantity !== "0") {
    const quantityFilter = parseInt(filters.quantity, 10);
    query = query.where('quantity', '>=', quantityFilter);
  }

  if (filters.certification) {
    filters.certification.forEach((certificate) => {
      if (certificate.isChecked) {
        const certField = certificate.value.toLowerCase();
        query = query.where(
          `certificates.${certField}.${certField}`,
          '==',
          true,
        );
      }
    });
  }

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
  }, [filters]);

  return { factories };
}
