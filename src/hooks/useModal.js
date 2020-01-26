import { useState } from 'react';

function useModal(initialMode = false) {
	const [ modalOpen, setModalOpen ] = useState(initialMode);

	function openModal() {
		setModalOpen(true);
	}

	function closeModal() {
		if (modalOpen) {
			setModalOpen(false);
		}
	}

	function toggleModal() {
		setModalOpen(!modalOpen);
	}
	return [ modalOpen, openModal, closeModal, toggleModal ];
}

export default useModal;
