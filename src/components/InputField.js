/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const InputField = ({ inputLabel, onChange, placeholder }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <label id={name} htmlFor={inputLabel}>
        <Styled.h4
          sx={{
            marginBottom: 2
          }}
        >
          {inputLabel}
        </Styled.h4>
      </label>

      <TextField id="outlined-basic" variant="outlined" onChange={onChange} placeholder={placeholder} />

    </div>
  )
};

export default InputField;
InputField.propTypes = {
	inputLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: '',
};

