import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const PrimaryButton = ({ label, clearFilter }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={clearFilter}>
        {label}
      </Button>
    </div>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  clearFilter: PropTypes.func.isRequired,
};
