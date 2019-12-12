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
        paddingX: [3, null, 7],
        paddingY: [3, null, 4],
        display: 'flex',
        alignItems: 'center',
        // backgroundImage: 'linear-gradient(to right, rgba(0,84,103,0), rgba(0,84,103,1))',
      }}
    >
      <div><Navbrand /></div>
      <div sx={{ marginLeft: 'auto' }}><NavItems /></div>
    </nav>
  );
};
export default NavigationDesktop;