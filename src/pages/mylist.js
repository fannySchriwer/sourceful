/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { Fragment, useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import MyFactory from '../components/MyFactory';
import useGetMyFactories from '../hooks/useGetMyFactories';
import { useAuth } from '../hooks/useAuth';
import firebase from '../services/firebase';

const MyList = ({ data: { allMyFactory }}) => {
  const [factories, setFactories] = useState([]);
  // get user id here from currentuser 
  //const myList = useGetMyFactories(userID);
  //setFactories(myList);
  const auth = useAuth();
    console.log(auth);
    const db = firebase.firestore();

    useEffect(() => {
    const unsubscribe = db.collection(`users/2MlrBL6nrjeWexor44NDAmHNs7y1/myList`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map(function(querySnapshot) {
          console.log(querySnapshot);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });

    });

	return(
		<Fragment>
			<h1>My List</h1>
			{factories.map((f, index) => (
				<MyFactory factory={f.node} key={index} />
			))}
		</Fragment>
  )};

export default MyList;

export const pageQuery = graphql`
  query {
		allMyFactory {
			edges {
				node {
					id
					comment
					employee
					userID
					factoryID
				}
			}
		}
  }
`;
