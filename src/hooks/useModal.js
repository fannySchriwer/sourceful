import { useState } from 'react';

function useModal(initialMode = false) {
  const [modalOpen, setModalOpen] = useState(initialMode);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    if (modalOpen) {
      setModalOpen(false);
    }
  }
  return {modalOpen, openModal, closeModal};
}

export default useModal;
