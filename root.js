/* eslint-disable import/prefer-default-export */

import { css, Global } from '@emotion/core';
import 'typeface-lato';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import { ProviderAuth } from './src/hooks/useAuth';
import ReactBreakpoints from 'react-breakpoints';

library.add(fas, fab, far);

// Put providers here

export const wrapRootElement = ({ element }) => {
	const breakpoints = {
		mobile: 320,
		mobileLandscape: 480,
		tablet: 768,
		tabletLandscape: 1024,
		desktop: 1200,
		desktopLarge: 1500,
		desktopWide: 1920
	};
	return (
		<Fragment>
			<Global
				styles={css`
					/* CSS reset */
					:root {
						scroll-behavior: smooth;
						min-width: 320px;
					}
					body {
						margin: 0;
						box-sizing: border-box;
					}
					[data-whatintent='mouse'] *:focus {
						outline: none;
					}
				`}
			/>
			<ReactBreakpoints breakpoints={breakpoints}>
				<ProviderAuth>{element}</ProviderAuth>
			</ReactBreakpoints>
		</Fragment>
	);
};

wrapRootElement.propTypes = {
	element: propTypes.node.isRequired
};
