/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState } from 'react';
import firebase from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from './PrimaryButton';

const DeleteFactory = ({ modalOpen, closeModal, factory }) => {
	const [ errors, setErrors ] = useState('');
	const db = firebase.firestore();
	const auth = useAuth();

	function deleteFactoryFromMyList() {
		const userId = auth.currentUser.uid;
		console.log(userId);
		console.log(factory.id);
		db
			.collection('users')
			.doc(userId)
			.collection('myList')
			.doc(factory.id)
			.delete()
			.then(function() {
				console.log('Document successfully deleted!');
				closeModal();
			})
			.catch(function(error) {
				console.error('Error removing document: ', error);
			});
	}

	return (
		<div>
			<Styled.h2>{factory.name}</Styled.h2>
			<Styled.p sx={{ padding: 4 }}>Do you want to delete this factory from your list?</Styled.p>
			<div sx={{ padding: 3 }}>
				<PrimaryButton propFunction={closeModal}>Cancel</PrimaryButton>
				<PrimaryButton propFunction={deleteFactoryFromMyList}>Delete</PrimaryButton>
			</div>
			{errors && (
				<p
					sx={{
						color: '#f50057'
					}}
				>
					{String(errors)}
				</p>
			)}
		</div>
	);
};
export default DeleteFactory;
