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
import { useAppSelector } from '_app/redux';
import { spinTheWheel } from '_features/spin-wheel';
import { useAppDispatch, setFreeSpins } from '_app/redux';

export const FreeSpinsModal = () => {
  const freeSpins = useAppSelector((state) => state.main.freeSpins);
  const dispatch = useAppDispatch();
  const spin = () => {
    if (freeSpins && freeSpins > 0) {
      spinTheWheel();
      dispatch(setFreeSpins(freeSpins - 1));
    }
  };
  return (
    <Modal>
      <ModalBackground src={modal3} />
      <ModalContent padding={PADDING} top={TOP}>
        <LargeText>YOU’VE EARNED</LargeText>
        <PrizeText fontSize="64px">{freeSpins}</PrizeText>
        <LargeText>FREE SPINS</LargeText>
        <Image onClick={spin} cursor="pointer" src={spinButton} />
        <Image src={gizmo} />
      </ModalContent>
    </Modal>
  );
};
