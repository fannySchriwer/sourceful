import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtonsGroup = ({
  options, formLabel, name, onChange,
}) => (
  <div>
    <FormControl component="fieldset">
      <FormLabel component="legend">{formLabel}</FormLabel>
      <RadioGroup name={name} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  </div>
);
export default RadioButtonsGroup;

RadioButtonsGroup.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  formLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
