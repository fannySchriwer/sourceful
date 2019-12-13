/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import DialogBox from './DialogBox';
import DialogBoxWrapper from './DialogBoxWrapper';
import Overlay from './Overlay';
import Login from '../Login';
import AddComment from '../AddComment';
import PrimaryButton from '../PrimaryButton';

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
					<PrimaryButton label={'X'} propFunction={closeModal} />
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
