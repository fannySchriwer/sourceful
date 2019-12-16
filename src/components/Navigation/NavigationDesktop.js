/** @jsx jsx */

import { jsx } from 'theme-ui';
import Navbrand from './NavBrand';
import NavItems from './NavItems';
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';
import { useState } from 'react';

const NavigationDesktop = () => {
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
				position: 'fixed',
				width: '100%',
				boxSizing: 'border-box',
				paddingX: 4,
				paddingY: 3,
				display: 'flex',
				alignItems: 'center',
				zIndex: 3,
				display: shouldHideHeader ? 'none' : 'flex',
				background: shouldShowBackgroundColor
					? 'linear-gradient(0deg, rgba(182,214,203,1) 0%, rgba(0,84,103,1) 100%)'
					: 'transperant'
			}}
		>
			<div>
				<Navbrand />
			</div>
			<div sx={{ marginLeft: 'auto' }}>
				<NavItems />
			</div>
		</nav>
	);
};
export default NavigationDesktop;
