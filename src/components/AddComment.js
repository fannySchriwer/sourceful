import React, { useState } from 'react';
import firebase from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from './PrimaryButton';
import TextArea from './TextArea';

const AddComment = ({ factory }) => {
  const [comment, setComment] = useState('');
  const db = firebase.firestore();
  const auth = useAuth();

  function addFactoryToMyList() {
	db.collection('myList').add({
		  comment: comment,
		  factoryID: factory.id,
		  userID: auth.currentUser.uid,
	  }).then((response) => {
		  if(response.id) {
			  console.log('succesfully added factory to my list');
		  }
	  });
  }

  function handleChange(e) {
	  setComment(e.target.value);
  }
  return(
   <div>
		<h1>Add factory</h1>
		<h2>{factory.name}</h2>
		<TextArea onChange={handleChange} label="Comment" placeholder="Add your personal comment" />
		<PrimaryButton label="Add Factory" propFunction={addFactoryToMyList} />
   </div>
)};
export default AddComment;
