/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const EditButton = ({ editFunction }) => (
	<button sx={{ background: 'none', border: 'none' }} onClick={editFunction}>
		<FontAwesomeIcon icon={[ 'far', 'edit' ]} sx={{ color: 'primary', fontSize: 4, cursor: 'pointer' }} />
	</button>
);
export default EditButton;
