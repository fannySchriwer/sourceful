/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import DialogBox from './DialogBox';
import DialogBoxWrapper from './DialogBoxWrapper';
import Overlay from './Overlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalPortal from './ModalPortal';
import { useContext } from 'react';
import { ModalContext } from '../ModalContext';
const Modal = ({ children }) => {
    const { modalOpen, closeModal } = useContext(ModalContext);
    if (!modalOpen) {
        return null;
    }
    return (
        <ModalPortal>
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
                    </DialogBox>
                </DialogBoxWrapper>
            </Overlay>
        </ModalPortal>
    );
};
export default Modal;
Modal.propTypes = {
    children: PropTypes.node.isRequired,
};
