/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const PrimaryButton = ({ label, propFunction }) => (
  <div>
    <button type="button" onClick={propFunction}
      sx={{
        variant: 'buttons.primary'
      }}>
      {label}
    </button>
  </div>
);
export default PrimaryButton;

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  propFunction: PropTypes.func.isRequired,
};
