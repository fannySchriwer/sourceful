import { useState } from 'react';

function useModal() {
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    if (modalOpen) {
      setModalOpen(false);
    }
  }
  return {modalOpen, setModalOpen, closeModal};
}

export default useModal;
