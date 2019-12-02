import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ComboBox = ({ options, optionLabel, inputLabel }) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={optionLabel}
      style={{ width: 300, margin: 15 }}
      renderInput={params => (
        <TextField {...params} label={inputLabel} variant="outlined" fullWidth />
      )}
    />
  );
}

export default ComboBox;