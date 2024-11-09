import styled from 'styled-components';
import frame from '/wheel-frame.png';
import rewards from '/wheel-rewards.png';

export const WheelContainer = styled.div`
  position: relative;
  @media (max-width: 960px) {
    margin-top: -15px;
  }
`;

export const Frame = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  top: -15px;
`;

export const Rewards = styled.img`
  width: 100%;
  transition: transform 5s;
  transform: scale(0.85) rotate(0deg);
`;

export const Wheel = () => {
  return (
    <WheelContainer>
      <Rewards src={rewards} />
      <Frame src={frame} />
    </WheelContainer>
  );
};
