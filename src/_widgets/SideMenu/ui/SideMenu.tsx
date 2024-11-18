import { LargeText } from '_shared/ui';
import modal6 from '/modal-6.png';
import styled from 'styled-components';
import modalCloseButton from '/modal-close-button.png';
import { useAppSelector, useAppDispatch, setSliderOpen } from '_app/redux';
import { useOnClickOutside } from 'usehooks-ts';
import { useRef } from 'react';
import { useSliderMutation } from '_features/slider-mutation';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
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
  height: calc(100% - 100px);
  position: absolute;
  width: 30%;
  right: 0;
  top: 0;
  background: url(${modal6});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding: 50px;
  border: 3px solid white;
  border-top-left-radius: 60px;
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
  const contentRef = useRef<HTMLDivElement | null>(null);
  const open = useAppSelector((state) => state.main.sliderOpen);

  const _sliderMutation = useSliderMutation();

  useOnClickOutside(contentRef, _sliderMutation.closeSlider);

  if (!open) return null;
  return (
    <MainContainer>
      <FirstOverlay />
      <SecondOverlay />

      <SideMenuContent ref={contentRef}>
        <CloseButton
          onClick={_sliderMutation.toggleSlider}
          src={modalCloseButton}
        />
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
