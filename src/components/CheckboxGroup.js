import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const CheckboxesGroup = ({ checkboxOptions, name, onChange }) => (
  <div>
    <FormControl component="fieldset">
      <FormLabel component="legend">Certificates</FormLabel>
      <FormGroup>
        {checkboxOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            control={<Checkbox onChange={onChange} value={option.value} />}
            label={option.label}
            name={name}
          />
        ))}
      </FormGroup>
    </FormControl>
  </div>
);

export default CheckboxesGroup;

CheckboxesGroup.propTypes = {
  checkboxOptions: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
