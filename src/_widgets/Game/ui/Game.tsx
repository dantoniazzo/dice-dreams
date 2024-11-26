import styled from "styled-components";
import { FreeSpinsModal } from "_widgets/FreeSpinsModal";
import { UserIdModal } from "_widgets/UserIdModal";
import { Wheel } from "_widgets/Wheel";
import { WinModal } from "_widgets/WinModal";
import { SideMenu } from "_widgets/SideMenu";
import { useAppSelector } from "_app/redux";
import santaGizmo from "/santa-gizmo.png";
import freezeGizmo from "/freeze-gizmo.png";

export const GameContainer = styled.div`
  width: 100%;
  height: calc(100% - 20vh);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 960px) {
    width: 80%;
  }
`;

export const GizmosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const LeftGizmo = styled.img``;
export const RightGizmo = styled.img``;
export const Game = () => {
  const freeSpins = useAppSelector((state) => state.main.freeSpins);
  return (
    <GameContainer>
      <Left>
        {freeSpins === undefined && <UserIdModal />}
        {freeSpins !== undefined && <FreeSpinsModal />}
      </Left>
      <Right>
        <Wheel />
        <GizmosContainer>
          <LeftGizmo src={santaGizmo} />
          <RightGizmo src={freezeGizmo} />
        </GizmosContainer>
      </Right>

      <WinModal />
      <SideMenu />
    </GameContainer>
  );
};
