/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { ToggleContextProvider } from '../ToggleContext';
import Dropdown from './Dropdown';
import Hamburger from './Hamburger';
import Navbrand from './NavBrand';

const NavigationMobile = () => {
  return (
    <nav
      sx={{
        zIndex: 3,
        position: 'fixed',
        width: '100%',
        boxSizing: 'border-box',
        paddingX: 3,
        paddingY: 3,
        display: 'flex',
    }}>
      <ToggleContextProvider>
        <Navbrand />
        <Hamburger />
        <Dropdown/>
      </ToggleContextProvider>
    </nav>
  );
};

export default NavigationMobile;

NavigationMobile.propTypes = {
};
