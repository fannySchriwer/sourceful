/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';

const Subheading = ({ children }) => (
	<Styled.p as="div" sx={{ fontStyle: 'italic', fontWeight: 'normal' }}>
		{children}
	</Styled.p>
);

export default Subheading;
Subheading.propTypes = {
	children: PropTypes.node.isRequired
};
