import React from 'react';

const MyFactory = ({ factory }) => {
	return(
		<div key={factory.id}>
			<h3>Comment: {factory.comment}</h3>
	    <p>By user: {factory.userID}</p>
			<div>
			</div>
		</div>
	)
};

export default MyFactory;
