/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const DialogBoxWrapper = ({ children }) => (
  <div
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1050,
      width: '100%',
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      boxShadow: 'hover',
    }}
  >
    {children}
  </div>
);

export default DialogBoxWrapper;

DialogBoxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
