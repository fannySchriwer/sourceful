/** @jsx jsx */
import { jsx } from 'theme-ui';
import Navigation from './Navigation';
import { Fragment } from 'react';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Navigation>{children}</Navigation>
			<main
				sx={{
					maxWidth: '1140px',
					marginX: [ 4, 5, 6 ],
					paddingY: [ 6 ]
				}}
			>
				{children}
			</main>
		</Fragment>
	);
};

export default Layout;
