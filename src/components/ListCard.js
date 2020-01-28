/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
const ListCard = ({ children }) => (
	<article
		sx={{
			display: 'grid',
			gridTemplateRows: '1fr 1fr 2fr',
			boxShadow: 'hover',
			paddingX: 3,
			paddingY: 4
		}}
	>
		{children}
	</article>
);

export default ListCard;

ListCard.propTypes = {
	children: PropTypes.node.isRequired
};
