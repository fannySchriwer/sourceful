/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import DialogBox from './DialogBox';
import DialogBoxWrapper from './DialogBoxWrapper';
import Overlay from './Overlay';
import Login from '../Login';
import AddComment from '../AddComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ modalOpen, closeModal, isLoaded, factory }) => {
	if (!modalOpen) {
		return null;
	}

	function handleSignin() {
		if (!factory) {
			closeModal();
		} else {
			return;
		}
	}

	return (
		<Overlay>
			<DialogBoxWrapper>
				<DialogBox>
					<button
						sx={{
							background: 'none',
							border: 'none',
							top: 0,
							position: 'absolute',
							right: 0,
							padding: 4,
							borderRadius: 4,
							':hover': {
								backgroundColor: 'secondary'
							},
							':active': {
								backgroundColor: 'primary'
							},
							':focus': {
								backgroundColor: 'primary'
							}
						}}
						onClick={closeModal}
					>
						<FontAwesomeIcon
							icon={[ 'fas', 'times' ]}
							sx={{ color: 'primary', fontSize: 5, textAlight: 'center' }}
						/>
					</button>
					{isLoaded && factory ? <AddComment factory={factory} /> : <Login propFunction={handleSignin} />}
				</DialogBox>
			</DialogBoxWrapper>
		</Overlay>
	);
};
export default Modal;
Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	modalOpen: PropTypes.bool.isRequired
};
