import styled from 'styled-components';
import frame from '/wheel-frame.png';
import rewards from '/wheel-rewards.png';

export const WheelContainer = styled.div`
  position: relative;
`;

export const Frame = styled.img`
  position: absolute;
`;

export const Rewards = styled.img`
  position: absolute;
  top: 8px;
  left: -5px;
  transition: transform 5s;
  transform: scale(0.85) rotate(3600deg);
`;

export const Wheel = () => {
  return (
    <WheelContainer>
      <Rewards src={rewards} />
      <Frame src={frame} />
    </WheelContainer>
  );
};
