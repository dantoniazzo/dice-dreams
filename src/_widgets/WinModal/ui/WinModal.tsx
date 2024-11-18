import { Dialog, MediumText, ModalBackground, ModalContent } from '_shared/ui';
import { Modal } from '_shared/ui';
import modal2 from '/modal-2.png';
import { PADDING, TOP } from '../lib/constants';
import christmasDice from '/christmas-dice.png';
import redeemButton from '/redeem-button.png';
import { PrizeText, Image } from '_shared/ui';
import { useAppSelector, useAppDispatch, setPrize } from '_app/redux';
import { useEffect, useState } from 'react';

export const WinModal = () => {
  const [open, setOpen] = useState(false);
  const prize = useAppSelector((state) => state.main.prize);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(setPrize(null));
  };

  useEffect(() => {
    setOpen(!!prize);
  }, [prize]);

  return (
    <Dialog open={open} setOpen={setOpen}>
      <Modal>
        <ModalBackground src={modal2} />
        <ModalContent justifyContent="space-around" padding={PADDING} top={TOP}>
          <MediumText>You’ve Won</MediumText>
          <PrizeText>25 ROLLS</PrizeText>
          <Image src={christmasDice} />
          <MediumText>Redeem Your Prize Inside The Game</MediumText>
          <Image cursor="pointer" onClick={closeModal} src={redeemButton} />
        </ModalContent>
      </Modal>
    </Dialog>
  );
};
