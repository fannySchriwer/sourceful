/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState } from 'react';
import firebase from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from './PrimaryButton';
import TextArea from './TextArea';
import { graphql, useStaticQuery } from 'gatsby';

const AddComment = ({ factory, closeModal }) => {
  const [ comment, setComment ] = useState('');
  const [errors, setErrors] = useState('');
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
	  db.collection('users').doc(auth.currentUser.uid).collection('myList').add({
			comment: comment,
			name: factory.name,
		  factoryID: factory.id,
		  userID: auth.currentUser.uid,
			employee: factory.employee,
		  quantity: factory.quantity,
			producttype: factory.producttype,
			category: factory.category,
			country: factory.address.country,

	  }).then((response) => {
		  if(response.id) {
        console.log('succesfully added factory to my list');
        closeModal();
		  }
	  }).catch((error) => {
      setErrors(error.message);
      return errorMessage;
    });;
  }

	function handleChange(e) {
		setComment(e.target.value);
	}
	return (
		<div>
			<Styled.h2>{factory.name}</Styled.h2>
      <Styled.p sx={{padding: 4}}>{datoCmsHelperText.addComment}</Styled.p>
			<TextArea onChange={handleChange} label="Comment" placeholder="Add your personal comment" />
      <div sx={{padding: 3}}>
			  <PrimaryButton propFunction={addFactoryToMyList}>Add factory</PrimaryButton>
      </div>
      {errors && (
					<p sx={{
            color: '#f50057'
          }}>
						{String(errors)}
					</p>
				)}
		</div>
	);
};
export default AddComment;
