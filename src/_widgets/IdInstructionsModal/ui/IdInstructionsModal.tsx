import {
  Dialog,
  MediumText,
  ModalBackground,
  ModalContent,
  ModalProps,
} from '_shared/ui';
import { Modal } from '_shared/ui';
import modal4 from '/modal-4.png';
import instructionsImage1 from '/instructions-image-1.png';
import instructionsImage2 from '/instructions-image-2.png';
import { PADDING, TOP } from '../lib/constants';
import { Image } from '_shared/ui';
import { ModalCloseButton } from '_shared/ui';

export const IdInstructionsModal = (props: ModalProps) => {
  return (
    <Dialog open={props.open} setOpen={props.setOpen}>
      <Modal>
        <ModalBackground src={modal4} />

        <ModalContent justifyContent="space-around" padding={PADDING} top={TOP}>
          <ModalCloseButton
            onClick={() => {
              props.setOpen(false);
            }}
            align="end"
          />
          <MediumText textAlign="center">
            1. Click on the gear icon in the upper right corner of the menu
          </MediumText>
          <Image src={instructionsImage1} />
          <MediumText textAlign="center">
            2. Your Player ID is located directly below the version number
          </MediumText>
          <Image src={instructionsImage2} />
        </ModalContent>
      </Modal>
    </Dialog>
  );
};
