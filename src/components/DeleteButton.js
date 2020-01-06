/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const DeleteButton = ({ deleteFunction }) => (
	<button sx={{ background: 'none', border: 'none' }} onClick={deleteFunction}>
		<FontAwesomeIcon icon={[ 'far', 'trash-alt' ]} sx={{ color: 'primary', fontSize: 4, cursor: 'pointer' }} />
	</button>
);

export default DeleteButton;
