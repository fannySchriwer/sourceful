/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';

const PrimaryButton = ({ children, propFunction }) => (
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
			<button
				onClick={propFunction}
				sx={{
					variant: 'buttons.primary'
				}}
			>
				{children}
			</button>
		</Ripples>
	</div>
);
export default PrimaryButton;

PrimaryButton.propTypes = {
	children: PropTypes.node.isRequired
};
