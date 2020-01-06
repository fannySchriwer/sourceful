/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import DialogBox from './DialogBox';
import DialogBoxWrapper from './DialogBoxWrapper';
import Overlay from './Overlay';
import Login from '../Login';
import AddComment from '../AddComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ modalOpen, closeModal, isLoaded, factory, children }) => {
	if (!modalOpen) {
		return null;
	}

	// function handleSignin() {
	// 	if (!factory) {
	// 		closeModal();
	// 	} else {
	// 		return;
	// 	}
	// }

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
							cursor: 'pointer'
						}}
						onClick={closeModal}
					>
						<FontAwesomeIcon
							icon={[ 'fas', 'times' ]}
							sx={{
								color: 'primary',
								fontSize: 4,
								textAlight: 'center',
								':hover': {
									color: 'secondary'
								}
							}}
						/>
					</button>
					{children}
					{/* {isLoaded && factory ? (
						<AddComment closeModal={closeModal} factory={factory} />
					) : (
						<Login propFunction={handleSignin} />
					)} */}
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
