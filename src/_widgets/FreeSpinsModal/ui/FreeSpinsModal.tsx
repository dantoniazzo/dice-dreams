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
import { setPrize, useAppSelector } from '_app/redux';
import { spinTheWheel } from '_features/spin-wheel';
import { useAppDispatch, setFreeSpins } from '_app/redux';
import { useState } from 'react';
import { DURATION_OF_SPIN } from '_widgets/Wheel';
import { Prizes } from '_entities/prize';

export const FreeSpinsModal = () => {
  const [disabled, setDisabled] = useState(false);
  const freeSpins = useAppSelector((state) => state.main.freeSpins);
  const dispatch = useAppDispatch();
  const spin = () => {
    if (freeSpins && freeSpins > 0) {
      spinTheWheel();
      dispatch(setFreeSpins(freeSpins - 1));
      setDisabled(true);
      setTimeout(() => {
        dispatch(setPrize(Prizes.JACKPOT));
        setDisabled(false);
      }, DURATION_OF_SPIN * 1000);
    }
  };
  return (
    <Modal>
      <ModalBackground src={modal3} />
      <ModalContent padding={PADDING} top={TOP}>
        <LargeText>YOU’VE EARNED</LargeText>
        <PrizeText fontSize="64px">{freeSpins}</PrizeText>
        <LargeText>FREE SPINS</LargeText>
        <Image
          onClick={() => {
            if (!disabled) spin();
          }}
          cursor={!disabled ? 'pointer' : ''}
          src={spinButton}
        />
        <Image src={gizmo} />
      </ModalContent>
    </Modal>
  );
};
