/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';

const AnchorLink = ({ children, href, handleClick }) => (
	<Styled.a
		href={`/#${href}`}
		aria-label={`Scroll to ${href}`}
		onClick={handleClick}
		sx={{
			marginRight: [ 0, null, 5 ],
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
export default AnchorLink;

AnchorLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func.isRequired
};
