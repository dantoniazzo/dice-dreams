import styled from "styled-components";
import { FreeSpinsModal } from "_widgets/FreeSpinsModal";
import { UserIdModal } from "_widgets/UserIdModal";
import { Wheel } from "_widgets/Wheel";
import { WinModal } from "_widgets/WinModal";
import { SideMenu } from "_widgets/SideMenu";
import { useAppSelector } from "_app/redux";

export const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Game = () => {
  const freeSpins = useAppSelector((state) => state.main.freeSpins);
  return (
    <GameContainer>
      {!freeSpins && <UserIdModal />}
      {!!freeSpins && <FreeSpinsModal />}
      <Wheel />
      <WinModal />
      <SideMenu />
    </GameContainer>
  );
};
