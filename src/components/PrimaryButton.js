/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const PrimaryButton = ({ children, propFunction }) => (
	<button
		onClick={propFunction}
		sx={{
			variant: 'buttons.primary'
		}}
	>
		{children}
	</button>
);
export default PrimaryButton;

PrimaryButton.propTypes = {
	children: PropTypes.node.isRequired
};
