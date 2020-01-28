import PropTypes from 'prop-types';
import React from 'react';
import useModal from '../hooks/useModal';

function getState(modalOpen, toggleModal = () => {}, closeModal = () => {}, openModal = () => {}) {
	return {
		modalOpen,
		toggleModal,
		closeModal,
		openModal
	};
}

const ModalContext = React.createContext(getState());

const ModalContextProvider = ({ children }) => {
	const [ modalOpen, openModal, closeModal, toggleModal ] = useModal();

	return (
		<ModalContext.Provider value={getState(modalOpen, openModal, closeModal, toggleModal)}>
			{children}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalContextProvider };

ModalContextProvider.propTypes = {
	children: PropTypes.node.isRequired
};
