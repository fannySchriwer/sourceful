/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const Overlay = ({ children, onClick }) => (
  <div
    onClick={onClick}
    role="presentation"
    sx={{
      position: 'fixed',
      zIndex: 1040,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }}
  >
    {children}
  </div>
);

export default Overlay;

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
