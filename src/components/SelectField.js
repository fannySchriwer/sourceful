/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import PropTypes from 'prop-types';

const Select = ({ options, inputLabel, onChange, name, defaultValue }) => (
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

		<select
			name={name}
			value={defaultValue}
			onChange={onChange}
			sx={{
				border: (t) => `2px solid ${t.colors.secondary}`,
				borderRadius: 0,
				padding: 3,
				marginBottom: 3,
				textAlign: 'center',
				backgroundColor: 'white',
				':focus': {
					border: (t) => `2px solid ${t.colors.primary}`,
					outline: 'none'
				}
			}}
		>
			<option value="">-- Choose an option --</option>
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
	defaultValue: PropTypes.string.isRequired
};
