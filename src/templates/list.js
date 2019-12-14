/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { graphql } from 'gatsby';

const List = ({ data: { user } }) => {
	console.log(user);
	return (
		<Fragment>
			<h2>Pliz work, its your list {user.email}</h2>
			<p>{user.childList.name}</p>
			<p>{user.childList.comment}</p>
		</Fragment>
	);
};

export default List;

export const pageQuery = graphql`
	query($id: String!) {
		user(id: { eq: $id }) {
			id
			email
			childList {
				comment
				name
			}
		}
	}
`;
