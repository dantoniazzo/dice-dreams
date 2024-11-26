import { useState } from "react";
import { LargeText } from "_shared/ui";
import modal6 from "/modal-6.png";
import modal6bottom from "/modal-6-bottom.png";
import styled from "styled-components";
import modalCloseButton from "/modal-close-button.png";
import { useAppSelector } from "_app/redux";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import { useSliderMutation } from "_features/slider-mutation";
import { HowToModal } from "_widgets/HowToModal";
import { getHowToModalElement } from "_widgets/HowToModal";
import { MOBILE_SIZE } from "_shared/lib";

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

const SideMenuContentContainer = styled.div`
  height: 100%;
  width: 30%;
  position: absolute;
  right: 0;
  top: 0;
  background: url(${modal6});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  border: 3px solid white;
  border-top-left-radius: 60px;

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 100%;
  }
`;

const SideMenuContent = styled.div`
  height: calc(100% - 100px);
  padding: 50px;
`;

const TextContent = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  & > h1 {
    cursor: pointer;
    font-size: 2.5rem;
    &:hover {
      color: #5d0e91;
    }
  }
`;

const CloseButton = styled.img`
  cursor: pointer;
`;

const BottomImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
`;

export const SideMenu = () => {
  const [isHowToOpened, setIsHowToOpened] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const open = useAppSelector((state) => state.main.sliderOpen);

  const _sliderMutation = useSliderMutation();

  useOnClickOutside(contentRef, (event) => {
    const howToElement = getHowToModalElement();
    if (!howToElement?.contains(event.target as Node)) {
      _sliderMutation.closeSlider();
    }
  });

  const toggleHowTo = () => {
    setIsHowToOpened(!isHowToOpened);
  };

  if (!open) return null;
  return (
    <MainContainer>
      <FirstOverlay />
      <SecondOverlay />
      <SideMenuContentContainer>
        <SideMenuContent ref={contentRef}>
          <CloseButton
            onClick={_sliderMutation.toggleSlider}
            src={modalCloseButton}
          />
          <TextContent>
            <LargeText onClick={toggleHowTo}>HOW TO PARTICIPATE?</LargeText>
            <LargeText>CONDITIONS OF PARTICIPATION</LargeText>
            <LargeText>PRIVACY POLICY</LargeText>
            <LargeText>CONTACT</LargeText>
          </TextContent>
        </SideMenuContent>
        <BottomImage src={modal6bottom} />
        <HowToModal open={isHowToOpened} setOpen={setIsHowToOpened} />
      </SideMenuContentContainer>
    </MainContainer>
  );
};
