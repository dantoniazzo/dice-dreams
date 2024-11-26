import styled from "styled-components";
import frame from "/wheel-frame.png";
import rewards from "/wheel-rewards.png";
import pointer from "/pointer.png";
import { getRewardsElementId } from "../lib/rewards.element";
import { DURATION_OF_SPIN } from "../lib/constants";
import { MOBILE_SIZE } from "_shared/lib";

export const Frame = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
  top: 47.5%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${MOBILE_SIZE}px) {
    width: 100%;
    height: auto;
    top: 49%;
  }
`;

export const Rewards = styled.img`
  width: auto;
  height: 100%;
  transition: transform ${DURATION_OF_SPIN / 1000}s;
  transform-origin: center;
  transform: scale(0.85);
  @media (max-width: ${MOBILE_SIZE}px) {
    width: 100%;
    height: auto;
  }
`;

export const Pointer = styled.img`
  width: auto;
  height: 20%;
  position: absolute;
  left: 50%;
  top: 47.5%;
  transform: translate(-52%, -50%);
  @media (max-width: ${MOBILE_SIZE}px) {
    width: 20%;
    height: auto;
  }
`;

export const SantaGizmo = styled.img`
  position: absolute;
  left: -10rem;
  bottom: 0;
`;

export const FreezeGizmo = styled.img`
  position: absolute;
  right: -7rem;
  bottom: 0;
`;

export const Wheel = () => {
  return (
    <>
      <Rewards id={getRewardsElementId()} src={rewards} />
      <Frame src={frame} />
      <Pointer src={pointer} />
    </>
  );
};
