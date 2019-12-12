/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const PrimaryButton = ({ children, propFunction }) => (
  <div>
    <button type="button" onClick={propFunction}
      sx={{
        variant: 'buttons.primary'
      }}>
      {children}
    </button>
  </div>
);
export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  propFunction: PropTypes.func.isRequired,
};
