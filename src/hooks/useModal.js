import { useState } from 'react';

function useModal(initialMode = false) {
  const [modalOpen, setModalOpen] = useState(initialMode);

  function closeModal() {
    if (modalOpen) {
      setModalOpen(false);
    }
  }
  return [modalOpen, setModalOpen, closeModal];
}

export default useModal;
