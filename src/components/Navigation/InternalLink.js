/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const InternalLink = ({ children, href, handleClick }) => (
	<Styled.a
		as={Link}
		to={`/${href}`}
		onClick={handleClick}
		sx={{
			marginX: [ 3, null, 4 ],
			marginBottom: [ 4 ],
			position: 'relative',
			':before': {
				content: '""',
				position: 'absolute',
				width: 'calc(100% + 20px)',
				height: '2px',
				bottom: '-50%',
				left: '-10px',
				borderRadius: 2,
				backgroundColor: 'secondary',
				visibility: 'hidden',
				transform: 'scaleX(0)',
				transition: 'all 0.3s ease-in-out'
			},
			'&:hover': {
				'&:before': {
					visibility: 'visible',
					transform: 'scaleX(1)'
				}
			}
		}}
	>
		{children}
	</Styled.a>
);
export default InternalLink;

InternalLink.propTypes = {
	href: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func.isRequired
};
