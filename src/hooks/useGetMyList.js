import { useState, useEffect } from 'react';
import firebase from '../services/firebase';
import { useAuth } from './useAuth';

export default function useGetMyList() {
	const [ myList, setMyList ] = useState(null);
	const db = firebase.firestore();
	const auth = useAuth();

	const getList = (userId) => {
		let query = db.collection('users').doc(userId).collection('myList');
		query.onSnapshot(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				const myList = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				}));
				setMyList(myList);
			});
		});
	};

	useEffect(
		() => {
			//check if auth.currentUser is loaded,
			//if loaded retrieve myList using uid
			if (auth.currentUser) {
				const userId = auth.currentUser.uid;
				getList(userId);
			}
		},
		[ auth ]
	);
	// Return the user object and auth methods
	return { myList };
}
