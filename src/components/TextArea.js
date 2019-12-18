/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function TextArea({ label, placeholder, onChange }) {
	return (
		<textarea
			sx={{
				border: (t) => `2px solid ${t.colors.secondary}`,
				borderRadius: 0,
				outline: 'none',
				width: 7,
				minHeight: 5,
				':focus': {
					border: (t) => `2px solid ${t.colors.primary}`,
					outline: 'none'
				}
			}}
			id="text-area"
			label={label}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
}
