/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const DialogBox = ({ children }) => (
  <div
    sx={{
      textAlign: 'center',
      background: 'white',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      width: '350px',
      minHeight: '450px',
      maxHeight: '550px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 999,
      maxWidth: '500px',
      boxShadow: 'hover',
      border: (t) => `2px solid ${t.colors.muted}`,
    }}
  >
    {children}
  </div>
);

export default DialogBox;

DialogBox.propTypes = {
  children: PropTypes.node.isRequired,
};
