/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const HeaderContainer = ({ children }) => (
	<header
		sx={{
			height: [ '100vh' ],
			display: 'grid',
			gridTemplateColumns: '[outer-start] 1fr [center] 4fr [outer-end]',
			gridTemplateRows: [
				'[top] 1fr [middle] 4fr [bottom]',
				'[top] 1fr [middle-start] 3fr [middle-end] 1fr [bottom]'
			]
		}}
	>
		{children}
	</header>
);

export default HeaderContainer;

HeaderContainer.propTypes = {
	children: PropTypes.node.isRequired
};
