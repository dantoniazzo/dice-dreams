import styled from 'styled-components';
import { FreeSpinsModal } from '_widgets/FreeSpinsModal';
import { UserIdModal } from '_widgets/UserIdModal';
import { Wheel } from '_widgets/Wheel';
import { WinModal } from '_widgets/WinModal';
import { SideMenu } from '_widgets/SideMenu';
import { useAppSelector } from '_app/redux';
import santaGizmo from '/santa-gizmo.png';
import freezeGizmo from '/freeze-gizmo.png';
import { MOBILE_SIZE, useMobileDetector } from '_shared/lib';
import { playerApi } from '_entities/player';

export const GameContainer = styled.div`
  width: 100%;
  height: calc(100% - 20vh);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div<{ show?: boolean }>`
  width: 40%;
  height: 100%;
  display: ${(props) => (props.show === false ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  @media (max-width: ${MOBILE_SIZE}px) {
    width: 80%;
  }
`;

export const Right = styled.div<{ show?: boolean }>`
  width: 60%;
  height: 100%;
  display: ${(props) => (props.show === false ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${MOBILE_SIZE}px) {
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

  @media (max-width: ${MOBILE_SIZE}px) {
    display: none;
  }
`;

export const LeftGizmo = styled.img``;
export const RightGizmo = styled.img``;
export const Game = () => {
  const playerId = useAppSelector((state) => state.main.playerId);

  const isSpinning = useAppSelector((state) => state.main.isSpinning);
  const _mobileDetector = useMobileDetector();
  const { data } = playerApi.endpoints.getPlayer.useQueryState(playerId || '');
  const renderModal = () => {
    return (
      <Left
        show={
          (_mobileDetector.isMobile() && !isSpinning) ||
          !_mobileDetector.isMobile()
        }
      >
        {(data === undefined || data.totalSpins === undefined) && (
          <UserIdModal />
        )}
        {data !== undefined && data.totalSpins !== undefined && (
          <FreeSpinsModal />
        )}
      </Left>
    );
  };

  const renderWheel = () => {
    return (
      <Right
        show={
          (_mobileDetector.isMobile() && isSpinning) ||
          !_mobileDetector.isMobile()
        }
      >
        <Wheel />
        <GizmosContainer>
          <LeftGizmo src={santaGizmo} />
          <RightGizmo src={freezeGizmo} />
        </GizmosContainer>
      </Right>
    );
  };

  return (
    <GameContainer>
      {renderModal()}
      {renderWheel()}
      <WinModal />
      <SideMenu />
    </GameContainer>
  );
};
