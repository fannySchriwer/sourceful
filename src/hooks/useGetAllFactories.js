import { useState, useEffect } from 'react';
import firebase from '../services/firebase';

export default function useGetAllFactories(filters) {
  const [factories, setFactories] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  console.log(filters);

  const db = firebase.firestore();

  let query = db.collection('factories');
  if (filters.continent) {
    const continent = filters.continent.toLowerCase();
    query = query.where('continent', '==', `${continent}`);
  }
  if (filters.category) {
    const category = filters.category.toLowerCase();
    query = query.where(`category.${category}`, '==', true);
  }
  if (filters.productType) {
    const productType = filters.productType.toLowerCase();
    query = query.where(
      'producttype',
      'array-contains',
      `${productType}`,
    );
  }
  if (filters.quantity && filters.quantity !== "0") {
    const quantityFilter = parseInt(filters.quantity, 10);
    query = query.where('quantity', '>=', quantityFilter);
  }
  if (filters.certificates) {
    filters.certificates.forEach((certificate) => {
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

  const filterFactories = () => {
    const unsubscribe = query
      .limit(12)
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
  }

  useEffect(() => {
    filterFactories();
  }, [filters]);

  return { factories, lastDoc };
}
