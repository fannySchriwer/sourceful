import { throttle } from 'lodash';
import { useLayoutEffect, useState } from 'react';

/* Basic scroll utility function scaffolding */

function useDocumentScrollThrottled(callback) {
	const [ , setScrollPosition ] = useState(0);
	let previousScrollTop = 0;

	function handleDocumentScroll() {
		const { scrollTop: currentScrollTop } = document.documentElement || document.body;

		setScrollPosition((previousPosition) => {
			previousScrollTop = previousPosition;
			return currentScrollTop;
		});

		callback({ previousScrollTop, currentScrollTop });
	}

	// a throttle function that will fire at most every 250ms
	const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

	useLayoutEffect(
		() => {
			window.addEventListener('scroll', handleDocumentScrollThrottled);

			return () => window.removeEventListener('scroll', handleDocumentScrollThrottled);
		},
		[ handleDocumentScrollThrottled ]
	);
}

export default useDocumentScrollThrottled;
