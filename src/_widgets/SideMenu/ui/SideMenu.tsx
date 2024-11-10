import { LargeText } from '_shared/ui';
import { useState } from 'react';
import modal6 from '/modal-6.png';
import styled from 'styled-components';
import modalCloseButton from '/modal-close-button.png';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
`;

const Background = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
`;

const FirstOverlay = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background: #152a7fcc;
`;

const SecondOverlay = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background: #00000099;
`;

const SideMenuContent = styled.div`
  margin-top: 2.5rem;
  height: 40%;

  position: absolute;
  right: 7.2rem;
  top: 1.5rem;
`;

const TextContent = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  & > h1 {
    font-size: 2.5rem;
  }
`;

const CloseButton = styled.img`
  cursor: pointer;
`;

export const SideMenu = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => setOpen(!open);
  if (!open) return null;
  return (
    <MainContainer>
      <FirstOverlay />
      <SecondOverlay />
      <Background src={modal6} />

      <SideMenuContent>
        <CloseButton onClick={toggle} src={modalCloseButton} />
        <TextContent>
          <LargeText>HOW TO PARTICIPATE?</LargeText>
          <LargeText>CONDITIONS OF PARTICIPATION</LargeText>
          <LargeText>PRIVACY POLICY</LargeText>
          <LargeText>CONTACT</LargeText>
        </TextContent>
      </SideMenuContent>
    </MainContainer>
  );
};
