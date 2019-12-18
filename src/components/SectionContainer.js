/** @jsx jsx */
import { jsx } from 'theme-ui';
const SectionContainer = ({ children }) => (
	<div
		sx={{
			display: 'flex',
			flexDirection: [ 'column', 'row' ],
			justifyContent: [ 'center', 'space-around' ],
			paddingX: [ 4, 5, 6 ],
			paddingY: [ 3, 4 ]
		}}
	>
		{children}
	</div>
);

export default SectionContainer;
