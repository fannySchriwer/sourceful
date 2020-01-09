/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState, useContext } from 'react';
import firebase from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from './PrimaryButton';
import TextArea from './TextArea';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { SavedFactoryContext } from './SavedFactoryContext';

const AddComment = ({ factory, closeModal }) => {
	const [ comment, setComment ] = useState('');
	const [ errors, setErrors ] = useState('');
	const [ sentMessage, setSentMessage ] = useState(false);
	const db = firebase.firestore();
	const auth = useAuth();
	const { saved, toggleSaveBtn, unsaveFactory } = useContext(SavedFactoryContext);

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
			.add({
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
				if (response.id) {
					console.log('succesfully added factory to my list');
					closeModal();
					// setSentMessage(true);
					// setTimeout(() => {
					// 	setSentMessage(true);
					// 	closeModal();
					// }, 5000);
				}
			})
			.catch((error) => {
				setErrors(error.message);
				return errorMessage;
			});
	}

	function handleChange(e) {
		setComment(e.target.value);
	}

	let content;
	if (sentMessage) {
		content = (
			<div sx={{ paddingLeft: 5 }}>
				<FontAwesomeIcon icon="check-circle" sx={{ color: 'primary', fontSize: 6 }} />
				<Styled.h2>Congratulations</Styled.h2>
				<Styled.p>Factory has been added to your list</Styled.p>
			</div>
		);
	} else {
		content = (
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
		);
	}

	return <Fragment>{content}</Fragment>;
};
export default AddComment;
