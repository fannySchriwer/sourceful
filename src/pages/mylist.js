/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { Fragment, useState, useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';
import firebase from '../services/firebase';

const MyList = () => {
	const auth = useAuth();
	console.log(auth);
	const db = firebase.firestore();

	useEffect(() => {
		const unsubscribe = db
			.collection(`users/2MlrBL6nrjeWexor44NDAmHNs7y1/myList`)
			.get()
			.then((querySnapshot) => {
				querySnapshot.docs.map(function(querySnapshot) {
					console.log(querySnapshot);
					querySnapshot.forEach((doc) => {
						// doc.data() is never undefined for query doc snapshots
						console.log(doc.id, ' => ', doc.data());
					});
				});
			})
			.catch((error) => {
				console.log('Error getting documents: ', error);
			});
	});

	return (
		<Fragment>
			<h1>My List</h1>
		</Fragment>
	);
};

export default MyList;
