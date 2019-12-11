/** @jsx jsx */
// import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

import PrimaryButton from '../PrimaryButton';
import DialogBox from './DialogBox';
import DialogBoxWrapper from './DialogBoxWrapper';
import Overlay from './Overlay';

const Modal = ({ modalOpen, closeModal }) => {
  if (!modalOpen) {
    return null;
  }
  return (
    <Overlay onClick={closeModal}>
      <DialogBoxWrapper>
        <DialogBox>
          <PrimaryButton onClick={closeModal}>X</PrimaryButton>
        </DialogBox>
      </DialogBoxWrapper>
    </Overlay>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};
