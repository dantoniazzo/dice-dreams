import styled from 'styled-components';
import { FreeSpinsModal } from '_widgets/FreeSpinsModal';
import { UserIdModal } from '_widgets/UserIdModal';
import { Wheel } from '_widgets/Wheel';
import { WinModal } from '_widgets/WinModal';
import { IdInstructionsModal } from '_widgets/IdInstructionsModal';
import { HowToModal } from '_widgets/HowToModal';
import { SideMenu } from '_widgets/SideMenu';
import { useAppSelector } from '_app/redux';

export const GameContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Game = () => {
  const freeSpins = useAppSelector((state) => state.main.freeSpins);
  return (
    <GameContainer>
      {!freeSpins && <UserIdModal />}
      {freeSpins && <FreeSpinsModal />}
      <Wheel />
      <WinModal />
      {/* <IdInstructionsModal /> */}
      <SideMenu />
      {/*  <HowToModal /> */}
    </GameContainer>
  );
};
