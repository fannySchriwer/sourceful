/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState, useContext } from 'react';
import firebase from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from './PrimaryButton';
import { ModalContext } from './ModalContext';

const DeleteFactory = ({ factory, setOpenSnackbar, setSnackbarMsg }) => {
	const { closeModal } = useContext(ModalContext);
	const [ errors, setErrors ] = useState('');
	const db = firebase.firestore();
	const auth = useAuth();

	function deleteFactoryFromMyList() {
		const userId = auth.currentUser.uid;
		db
			.collection('users')
			.doc(userId)
			.collection('myList')
			.doc(factory.id)
			.delete()
			.then(function() {
				setSnackbarMsg('Document successfully deleted!');
				setOpenSnackbar(true);
				closeModal();
			})
			.catch(function(error) {
				console.error('Error removing document: ', error);
			});
	}

	return (
		<div>
			<Styled.h2 sx={{ padding: 4 }}>{factory.name}</Styled.h2>
			<Styled.p sx={{ padding: 4 }}>Do you want to delete this factory from your list?</Styled.p>
			<div sx={{ padding: 3, display: 'flex', justifyContent: 'center' }}>
				<div sx={{ flex: '1' }}>
				    <PrimaryButton propFunction={closeModal}>Cancel</PrimaryButton>
				</div>
				<div  sx={{ flex: '1' }}>
				    <PrimaryButton propFunction={deleteFactoryFromMyList}>Delete</PrimaryButton>
				</div>
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
