import styled from 'styled-components';
import { FreeSpinsModal } from '_widgets/FreeSpinsModal';
import { Wheel } from '_widgets/Wheel';
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
  return (
    <GameContainer>
      <FreeSpinsModal />

      <Wheel />
    </GameContainer>
  );
};
