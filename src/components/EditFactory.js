/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState } from 'react';
import firebase from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from './PrimaryButton';
import TextArea from './TextArea';

const EditFactory = ({ closeModal, factory }) => {
    const [ comment, setComment ] = useState(factory.comment);
	const [ errors, setErrors ] = useState('');
	const db = firebase.firestore();
    const auth = useAuth();
    
	function updateFactory() {
		const userId = auth.currentUser.uid;
		db
			.collection('users')
			.doc(userId)
			.collection('myList')
			.doc(factory.id)
			.update({
				comment: comment
			})
			.then(closeModal())
			.catch((error) => {
				setErrors(error.message);
			});
	}
	function handleChange(e) {
		e.stopPropagation();
		setComment(e.target.value);
	}
	return (
		<div>
			<Styled.h2>{factory.name}</Styled.h2>
			<Styled.p sx={{ padding: 4 }}>
				Edit your comment below and simply submit it when you are done. Your new comment will be saved for
				future use.
			</Styled.p>
			<TextArea onChange={handleChange} label="Comment" placeholder="Add your personal comment" value={comment} />
			<div sx={{ padding: 3 }}>
				<PrimaryButton propFunction={closeModal}>Cancel</PrimaryButton>
				<PrimaryButton propFunction={updateFactory}>Update</PrimaryButton>
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
export default EditFactory;
