import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  options, inputLabel, onChange, name, defaultValue,
}) => (
  <div>
    <label id={name} htmlFor={inputLabel}>
      {inputLabel}
    </label>

    <select name={name} value={defaultValue} onChange={onChange}>
      <option value="">--Please choose an option--</option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
Select.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  inputLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
