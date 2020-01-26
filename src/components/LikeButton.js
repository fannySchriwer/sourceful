/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, Fragment } from 'react';
import { ModalContext } from './ModalContext';

const LikeButton = ({ added }) => {
	const { toggleModal } = useContext(ModalContext);

	return (
		<button sx={{ background: 'none', border: 'none' }} onClick={toggleModal}>
			{added ? (
				<Fragment>
					<FontAwesomeIcon
						icon={[ 'fas', 'heart' ]}
						sx={{ color: 'primary', fontSize: 5, cursor: 'pointer' }}
					/>
					<p>Saved</p>
				</Fragment>
			) : (
				<Fragment>
					<FontAwesomeIcon
						icon={[ 'far', 'heart' ]}
						sx={{ color: 'primary', fontSize: 5, cursor: 'pointer' }}
					/>
					<p>Save</p>
				</Fragment>
			)}
		</button>
	);
};

export default LikeButton;
