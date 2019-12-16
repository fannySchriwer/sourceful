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

	const MINIMUM_SCROLL = 100;
	const TIMEOUT_DELAY = 200;

	useDocumentScrollThrottled((callbackData) => {
		const { previousScrollTop, currentScrollTop } = callbackData;
		const isScrolledDown = previousScrollTop < currentScrollTop;
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

		setShouldHideHeader(isScrolledDown && isMinimumScrolled);
		setTimeout(() => {
			setShouldShowBackgroundColor(isMinimumScrolled && currentScrollTop > 2);
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
				display: shouldHideHeader ? 'none' : 'flex',
				background: shouldShowBackgroundColor
					? 'linear-gradient(0deg, rgba(182,214,203,1) 0%, rgba(0,84,103,1) 100%)'
					: 'transperant'
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
