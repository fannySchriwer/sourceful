/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState, useContext, Fragment } from 'react';
import firebase from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from './PrimaryButton';
import TextArea from './TextArea';
import { graphql, useStaticQuery } from 'gatsby';
import { ModalContext } from './ModalContext';

const AddComment = ({ factory, setOpenSnackbar, setSnackbarMsg }) => {
	const [ comment, setComment ] = useState('');
	const [ errors, setErrors ] = useState('');
	const { closeModal } = useContext(ModalContext);

	const db = firebase.firestore();
	const auth = useAuth();

	const { datoCmsHelperText } = useStaticQuery(
		graphql`
			query {
				datoCmsHelperText {
					addComment
				}
			}
		`
	);

	function addFactoryToMyList() {
		db
			.collection('users')
			.doc(auth.currentUser.uid)
			.collection('myList')
			.doc(factory.id)
			.set({
				comment: comment,
				name: factory.name,
				factoryID: factory.id,
				userID: auth.currentUser.uid,
				employee: factory.employee,
				quantity: factory.quantity,
				producttype: factory.producttype,
				address: {
					city: factory.address.city,
					country: factory.address.country,
					street: factory.address.street,
					postalcode: factory.address.postalcode
				},
				category: factory.category,
				certificates: factory.certificates,
				contact: {
					email: factory.contact.email,
					website: factory.contact.website
				},
				continent: factory.continent,
				description: factory.description
			})
			.then((response) => {
				setSnackbarMsg('succesfully added factory to my list');
				setOpenSnackbar(true);
				closeModal();
			})
			.catch((error) => {
				setErrors(error.message);
			});
	}

	function handleChange(e) {
		setComment(e.target.value);
	}

	return (
		<Fragment>
			<div>
				<Styled.h2>{factory.name}</Styled.h2>
				<Styled.p sx={{ padding: 4 }}>{datoCmsHelperText.addComment}</Styled.p>
				<TextArea onChange={handleChange} label="Comment" placeholder="Add your personal comment" />
				<div sx={{ padding: 3 }}>
					<PrimaryButton propFunction={addFactoryToMyList}>Add factory</PrimaryButton>
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
		</Fragment>
	);
};
export default AddComment;
