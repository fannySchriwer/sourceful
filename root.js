/* eslint-disable import/prefer-default-export */

import { css, Global } from '@emotion/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import { ProviderAuth } from './src/hooks/useAuth';

library.add(fas, fab, far);

// Put providers here

export const wrapRootElement = ({ element }) => (
  // eslint-disable-next-line react/jsx-fragments
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
    <ProviderAuth>
      {element}
    </ProviderAuth>
  </Fragment>
);

wrapRootElement.propTypes = {
  element: propTypes.node.isRequired,
};
