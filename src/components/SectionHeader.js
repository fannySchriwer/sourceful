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
		<div
			sx={{
				marginX: 'auto',
				marginTop: 1,
				width: 4,
				border: (t) => `2px solid ${t.colors.primary}`,
				borderRadius: 0
			}}
		/>
	</Fragment>
);

export default SectionHeader;
