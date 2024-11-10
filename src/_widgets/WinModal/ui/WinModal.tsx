import { Dialog, ModalBackground, ModalContent } from '_shared/ui';
import { Modal } from '_shared/ui';
import { useState } from 'react';
import modal2 from '/modal-2.png';
import { PADDING, TOP } from '../lib/constants';
import styled from 'styled-components';
import christmasDice from '/christmas-dice.png';
import redeemButton from '/redeem-button.png';

export const Text = styled.h4`
  font-size: 20px;
`;

export const PrizeTitle = styled.h1`
  font-size: 32px;
  background: -webkit-linear-gradient(#f3f045, #ed8532);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Image = styled.img``;

export const WinModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} setOpen={setOpen}>
      <Modal>
        <ModalBackground src={modal2} />
        <ModalContent justifyContent="space-around" padding={PADDING} top={TOP}>
          <Text>You’ve Won</Text>
          <PrizeTitle>25 ROLLS</PrizeTitle>
          <Image src={christmasDice} />
          <Text>Redeem Your Prize Inside The Game</Text>
          <Image src={redeemButton} />
        </ModalContent>
      </Modal>
    </Dialog>
  );
};
