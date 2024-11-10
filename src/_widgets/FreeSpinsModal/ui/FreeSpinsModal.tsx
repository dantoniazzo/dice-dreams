import {
  LargeText,
  Modal,
  ModalBackground,
  ModalContent,
  PrizeText,
  Image,
} from '_shared/ui';
import modal3 from '/modal-3.png';
import { PADDING, TOP } from '../lib/constants';
import spinButton from '/spin-button.png';
import gizmo from '/gizmo.png';

export const FreeSpinsModal = () => {
  return (
    <Modal>
      <ModalBackground src={modal3} />
      <ModalContent padding={PADDING} top={TOP}>
        <LargeText>YOU’VE EARNED</LargeText>
        <PrizeText fontSize="64px">3</PrizeText>
        <LargeText>FREE SPINS</LargeText>
        <Image src={spinButton} />
        <Image src={gizmo} />
      </ModalContent>
    </Modal>
  );
};
