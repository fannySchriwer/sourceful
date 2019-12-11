/** @jsx jsx */
// import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import DialogBox from './DialogBox';
import DialogBoxWrapper from './DialogBoxWrapper';
import Overlay from './Overlay';
import Login from '../Login';



const Modal = ({ modalOpen, closeModal, isLoaded }) => {
  if (!modalOpen) {
    return null;
  }
  return (
    <Overlay >
      <DialogBoxWrapper>
        <DialogBox>
          {isLoaded ? (<h1>Hey you are logged import {  } from "module";</h1>) : <Login/>  }
          <button onClick={closeModal}>Close</button>
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
