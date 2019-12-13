/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Breakpoint } from 'react-socks';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

const Navigation = () => {
	return (
		<Fragment>
			<Breakpoint medium down>
				<NavigationMobile />
			</Breakpoint>
			<Breakpoint large up>
				<NavigationDesktop />
			</Breakpoint>
		</Fragment>
	);
};

export default Navigation;
