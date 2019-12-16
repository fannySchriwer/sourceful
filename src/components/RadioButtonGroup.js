/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtonGroup = ({
  options, formLabel, name, onChange, defaultValue
}) => (
  <div
    sx={{
      paddingTop: [2, 0],
      paddingBottom: [2, 0],
    }}>
    <FormControl component="fieldset">
      <FormLabel>
        <Styled.h3
          sx={{ marginBottom: 0, color: 'black' }}>
          {formLabel}
        </Styled.h3>
      </FormLabel>
      <RadioGroup
        sx={{
          display: 'flex',
          wrap: 'flex-wrap',
          flexDirection: 'row !important',
        }}
        name={name}
        value={defaultValue}
        onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel sx={{
            width: ['40%', '30%', null],
          }}
            key={option.value}
            value={option.value}
            control={<Radio/>}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  </div>
);
export default RadioButtonGroup;

RadioButtonGroup.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  formLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};
