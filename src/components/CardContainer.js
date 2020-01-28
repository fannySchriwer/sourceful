/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
const CardContainer = ({ children }) => (
	<div
		sx={{
			display: 'grid',
			gridTemplateColumns: [ '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)' ],
			gridGap: 4
		}}
	>
		{children}
	</div>
);

export default CardContainer;

CardContainer.propTypes = {
	children: PropTypes.node.isRequired
};
