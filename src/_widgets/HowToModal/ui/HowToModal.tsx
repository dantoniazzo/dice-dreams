import {
  Dialog,
  LargeText,
  MediumText,
  ModalBackground,
  ModalContent,
} from '_shared/ui';
import { Modal } from '_shared/ui';
import { useState } from 'react';
import modal5 from '/modal-5.png';
import { PADDING, TOP } from '../lib/constants';
import { ModalCloseButton } from '_shared/ui';
import styled from 'styled-components';

const HowToModalContent = styled.div`
  margin-top: 1.5rem;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const HowToModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} setOpen={setOpen}>
      <Modal>
        <ModalBackground src={modal5} />
        <ModalContent justifyContent="flex-start" padding={PADDING} top={TOP}>
          <ModalCloseButton align="end" />
          <HowToModalContent>
            <LargeText>HOW TO PARTICIPATE?</LargeText>
            <MediumText>1. Download Dice Dreams</MediumText>
            <MediumText>2. Play and unlock Kingdom 3</MediumText>
            <MediumText>3. Copy the Player ID</MediumText>
            <MediumText>4. Enter your Player ID</MediumText>
            <MediumText>5. Spin and win!</MediumText>
          </HowToModalContent>
        </ModalContent>
      </Modal>
    </Dialog>
  );
};
