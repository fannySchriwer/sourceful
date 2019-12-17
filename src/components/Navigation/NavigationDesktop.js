/** @jsx jsx */

import { jsx } from 'theme-ui';
import Navbrand from './NavBrand';
import NavItems from './NavItems';

import { Fragment } from 'react';

const NavigationDesktop = () => {
	return (
		<Fragment>
			<div>
				<Navbrand />
			</div>
			<div sx={{ marginLeft: 'auto' }}>
				<NavItems />
			</div>
		</Fragment>
	);
};
export default NavigationDesktop;
