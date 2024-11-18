import styled from 'styled-components';
import frame from '/wheel-frame.png';
import rewards from '/wheel-rewards.png';
import pointer from '/pointer.png';
import { getRewardsElementId } from '../lib/rewards.element';
import { spinTheWheel } from '_features/spin-wheel';

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
  transform: scale(0.85);
`;

export const Pointer = styled.img`
  position: absolute;
  left: 50%;
  top: calc(50% - 15px);
  transform: translate(-50%, -50%);
`;

export const Wheel = () => {
  return (
    <WheelContainer onClick={spinTheWheel}>
      <Rewards id={getRewardsElementId()} src={rewards} />
      <Frame src={frame} />
      <Pointer src={pointer} />
    </WheelContainer>
  );
};
