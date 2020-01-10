/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import { Link } from 'gatsby';

const LinkButton = ({ children, href }) => (
	<div
		sx={{
			display: 'inline-flex',
			borderRadius: 25,
			overflow: 'hidden',
			':hover': {
				boxShadow: 'hover'
			},
			':active': {
				boxShadow: 'hover'
			},
			':focus': {
				boxShadow: 'hover'
			}
		}}
	>
		<Ripples color="#B6D6CB" during={1200}>
			<a
				href={`#${href}`}
				aria-label={`Scroll to ${href}`}
				sx={{
					variant: 'buttons.primary',
					textDecoration: 'none'
				}}
			>
				{children}
			</a>
		</Ripples>
	</div>
);
export default LinkButton;

LinkButton.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired
};
