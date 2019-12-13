/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import MyFactory from '../components/MyFactory';
import useGetMyFactories from '../hooks/useGetMyFactories';
import { useAuth } from '../hooks/useAuth';

const MyList = ({ data: { allMyFactory }}) => {
	/*const [factories, setFactories] = useState([]);*/

	const auth = useAuth();
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    if(auth.currentUser){
			setUserID(auth.currentUser.uid);
    }
	}, [auth]);
	
	if(userID !== null) {
		console.log(userID);
		useGetMyFactories(userID);
	}  
	return(
		<Fragment>
			<h1>My List</h1>
			{allMyFactory.edges.map((f, index) => (
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
