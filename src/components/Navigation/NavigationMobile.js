/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ToggleContextProvider } from '../ToggleContext';
import Dropdown from './Dropdown';
import Hamburger from './Hamburger';
import Navbrand from './NavBrand';
import { Fragment } from 'react';

const NavigationMobile = () => {
	return (
		<Fragment>
			<ToggleContextProvider>
				<Navbrand />
				<Hamburger />
				<Dropdown />
			</ToggleContextProvider>
		</Fragment>
	);
};

export default NavigationMobile;
