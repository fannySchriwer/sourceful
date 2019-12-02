import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const CheckboxesGroup = ({ checkboxOptions }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Certificates</FormLabel>
        <FormGroup value={value}>
            {checkboxOptions.map(option => (
                <FormControlLabel
                  key={option.value}
                  control={<Checkbox onChange={handleChange} value={option.value} />}
                  label={option.label}
                />
            ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxesGroup;