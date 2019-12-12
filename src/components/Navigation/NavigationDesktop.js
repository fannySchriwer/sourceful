/** @jsx jsx */

import { jsx } from 'theme-ui';
import Navbrand from './NavBrand';
import NavItems from './NavItems';

const NavigationDesktop = () => {
  return (
    <nav
      sx={{
        zIndex: 3,
        width: '100%',
        boxSizing: 'border-box',
        paddingX: 7,
        paddingY: 4,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div><Navbrand /></div>
      <div sx={{ marginLeft: 'auto' }}><NavItems /></div>
    </nav>
  );
};
export default NavigationDesktop;