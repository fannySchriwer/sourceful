/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const CheckboxGroup = ({ checkBoxStateValues, name, onChange }) => {
  return(
    <div
      sx={{
        paddingTop: [3, 2],
        paddingBottom: 3,
      }}>
        <FormControl component="fieldset">
          <FormLabel>
            <Styled.h4 sx={{ marginBottom: 1, color: 'black' }}>Certificates</Styled.h4>
          </FormLabel>
          <FormGroup
            sx={{
              display: 'flex',
              wrap: 'flex-wrap',
              flexDirection: 'row !important',
            }}>
            {checkBoxStateValues.map((option) => (
              <FormControlLabel
                sx={{
                  width: '40%',
                }}
                key={option.value}
                control={<Checkbox checked={option.isChecked} onChange={onChange} value={option.value} />}
                label={option.value}
                name={name}
              />
            ))}
          </FormGroup>
        </FormControl>
    </div>
  )
};

export default CheckboxGroup;

CheckboxGroup.propTypes = {
  checkBoxStateValues: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
