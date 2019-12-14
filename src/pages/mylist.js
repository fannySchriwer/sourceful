/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { graphql } from 'gatsby';

import { useAuthantification } from '../hooks/useAuth';

const MyList = ({ data: { allUser } }) => {
	console.log(allUser);
	const { initializing, user } = useAuthantification();
	let id;
	if (!initializing) {
		id = user.uid;
		console.log(id);
	}

	return (
		<Fragment>
			<h1>My List</h1>
			{!initializing && <p>Hello {user.email}</p>}
		</Fragment>
	);
};

export default MyList;

export const pageQuery = graphql`
	query {
		allUser {
			nodes {
				id
				childList {
					name
					comment
				}
			}
		}
	}
`;
