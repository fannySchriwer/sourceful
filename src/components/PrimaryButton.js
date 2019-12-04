import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const PrimaryButton = ({ label, clearFilter }) => (
  <div>
    <Button variant="contained" color="primary" onClick={clearFilter}>
      {label}
    </Button>
  </div>
);
export default PrimaryButton;

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  clearFilter: PropTypes.func.isRequired,
};
