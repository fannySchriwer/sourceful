import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const PrimaryButton = ({ label, propFunction }) => (
  <div>
    <Button variant="contained" color="primary" onClick={propFunction}>
      {label}
    </Button>
  </div>
);
export default PrimaryButton;

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  propFunction: PropTypes.func.isRequired,
};
