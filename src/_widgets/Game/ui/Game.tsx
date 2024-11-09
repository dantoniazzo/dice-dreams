import styled from 'styled-components';
import { FreeSpinsModal } from '_widgets/FreeSpinsModal';
import { Wheel } from '_widgets/Wheel';
export const GameContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Game = () => {
  return (
    <GameContainer>
      <FreeSpinsModal />
      <Wheel />
    </GameContainer>
  );
};
