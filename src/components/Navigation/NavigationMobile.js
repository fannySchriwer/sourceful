/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ToggleContextProvider } from '../ToggleContext';
import Dropdown from './Dropdown';
import Hamburger from './Hamburger';
import Navbrand from './NavBrand';
import { useState } from 'react';
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';

const NavigationMobile = () => {
	const [ shouldHideHeader, setShouldHideHeader ] = useState(false);
	const [ shouldShowBackgroundColor, setShouldShowBackgroundColor ] = useState(false);

	const MINIMUM_SCROLL = 150;
	const TIMEOUT_DELAY = 100;

	useDocumentScrollThrottled((callbackData) => {
		const { previousScrollTop, currentScrollTop } = callbackData;
		const isScrolledDown = previousScrollTop < currentScrollTop;
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

		setShouldShowBackgroundColor(currentScrollTop > 2);

		setTimeout(() => {
			setShouldHideHeader(isScrolledDown && isMinimumScrolled);
		}, TIMEOUT_DELAY);
	});
	return (
		<nav
			sx={{
				zIndex: 3,
				position: 'fixed',
				width: '100%',
				boxSizing: 'border-box',
				paddingX: 3,
				paddingY: 3,
				display: shouldHideHeader ? 'none' : 'flex'
			}}
		>
			<ToggleContextProvider>
				<Navbrand />
				<Hamburger />
				<Dropdown />
			</ToggleContextProvider>
		</nav>
	);
};

export default NavigationMobile;
