import styled from 'styled-components';
import frame from '/wheel-frame.png';
import rewards from '/wheel-rewards.png';

export const WheelContainer = styled.div`
  position: relative;
`;

export const Frame = styled.img`
  position: absolute;
  width: 30%;
  aspect-ratio: 1/1;
`;

export const Rewards = styled.img`
  position: absolute;
  width: 30%;
  aspect-ratio: 1/1;
  top: 10px;
  transition: transform 5s;
  transform: scale(0.9) rotate(3600deg);
`;

export const Wheel = () => {
  return (
    <WheelContainer>
      {' '}
      <Rewards src={rewards} />
      <Frame src={frame} />
    </WheelContainer>
  );
};
