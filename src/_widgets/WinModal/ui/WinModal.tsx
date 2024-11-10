import { Dialog, ModalBackground } from '_shared/ui';
import { Modal } from '_shared/ui';
import { useState } from 'react';
import modal2 from '/modal-2.png';

export const WinModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} setOpen={setOpen}>
      <Modal>
        <ModalBackground src={modal2} />
      </Modal>
    </Dialog>
  );
};
