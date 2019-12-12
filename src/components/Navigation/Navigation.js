/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';


const Navigation = () => {
  return (
    <Fragment>
      {/* <NavigationDesktop /> */}
      <NavigationMobile />
    </Fragment>
  );
};

export default Navigation;
