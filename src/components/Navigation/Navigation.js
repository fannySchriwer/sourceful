/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottled';
import { Media } from 'react-breakpoints';

const Navigation = () => {
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
				paddingY: 2,
				alignItems: 'center',
				display: shouldHideHeader ? 'none' : 'flex',
				background: shouldShowBackgroundColor
					? 'linear-gradient(0deg, rgba(182,214,203,1) 0%, rgba(0,84,103,1) 100%)'
					: 'transperant'
			}}
		>
			<Media>
				{({ breakpoints, currentBreakpoint }) =>
					breakpoints[currentBreakpoint] > breakpoints.tablet ? <NavigationDesktop /> : <NavigationMobile />}
			</Media>
		</nav>
	);
};

export default Navigation;
