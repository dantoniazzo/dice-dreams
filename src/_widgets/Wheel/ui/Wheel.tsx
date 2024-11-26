import styled from "styled-components";
import frame from "/wheel-frame.png";
import rewards from "/wheel-rewards.png";
import pointer from "/pointer.png";
import santaGizmo from "/santa-gizmo.png";
import freezeGizmo from "/freeze-gizmo.png";
import { getRewardsElementId } from "../lib/rewards.element";
import { DURATION_OF_SPIN } from "../lib/constants";

export const WheelContainer = styled.div`
  position: relative;
`;

export const Frame = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  top: -15px;
`;

export const Rewards = styled.img`
  width: 100%;
  transition: transform ${DURATION_OF_SPIN}s;
  transform: scale(0.85);
`;

export const Pointer = styled.img`
  position: absolute;
  left: 50%;
  top: calc(50% - 15px);
  transform: translate(-50%, -50%);
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
    <WheelContainer>
      <Rewards id={getRewardsElementId()} src={rewards} />
      <Frame src={frame} />
      <Pointer src={pointer} />
      <SantaGizmo src={santaGizmo} />
      <FreezeGizmo src={freezeGizmo} />
    </WheelContainer>
  );
};
