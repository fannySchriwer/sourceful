/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Fragment } from 'react';

const SectionHeader = ({ children }) => (
	<Fragment>
		<Styled.h3
			sx={{
				width: [ 7, 8 ],
				marginX: 'auto',
				textAlign: 'center'
			}}
		>
			{children}
		</Styled.h3>
	</Fragment>
);

export default SectionHeader;
