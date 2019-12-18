/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const LikeButton = ({ setModalOpen }) => (
	<button sx={{ background: 'none', border: 'none' }} onClick={setModalOpen}>
		<FontAwesomeIcon icon={[ 'far', 'heart' ]} sx={{ color: 'primary', fontSize: 5, cursor: 'pointer' }} />
		<p>Save</p>
	</button>
);

export default LikeButton;
