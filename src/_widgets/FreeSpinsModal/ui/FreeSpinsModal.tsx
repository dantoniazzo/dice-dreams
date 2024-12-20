import {
  LargeText,
  Modal,
  ModalBackground,
  ModalContent,
  PrizeText,
  Image,
} from '_shared/ui';
import modal3 from '/modal-3.png';
import spinButton from '/spin-button.png';
import gizmo from '/gizmo.png';
import {
  setIsSpinning,
  setPrize,
  setPrizeModalOpened,
  useAppSelector,
} from '_app/redux';
import { spinTheWheel } from '_features/spin-wheel';
import { useAppDispatch } from '_app/redux';
import { DURATION_OF_SPIN } from '_widgets/Wheel';
import { useSpinWheelMutation } from '_features/spin-wheel';
import { useLazyGetPlayerQuery } from '_entities/player';
import { useSpins } from '_entities/player';
import styled from 'styled-components';
import { MOBILE_SIZE } from '_shared/lib';

export const EmptySpaceOnTop = styled.div`
  height: 25%;

  @media (max-width: ${MOBILE_SIZE}px) {
    height: 24%;
  }
`;
export const EmptySpaceOnBottom = styled.div`
  @media (max-width: ${MOBILE_SIZE}px) {
    height: 20%;
  }
`;

export const FreeSpinsModal = () => {
  const playerId = useAppSelector((state) => state.main.playerId);
  const isSpinning = useAppSelector((state) => state.main.isSpinning);
  const dispatch = useAppDispatch();
  const _spins = useSpins();
  const [handlePlayer] = useLazyGetPlayerQuery();

  const getSpinDelta = (from: number, to: number) => {
    const delta = to - from;
    const middle = from + delta / 2;
    const spinDelta = middle / 360;
    return spinDelta;
  };

  const [handleSpinWheel] = useSpinWheelMutation();
  const spin = async () => {
    if (!playerId) return;
    if (_spins.getRemainingSpins() > 0) {
      dispatch(setIsSpinning(true));
      setTimeout(async () => {
        if (!playerId) return;
        const { data } = await handleSpinWheel({ playerId });
        dispatch(setPrize(data?.prize));
        await handlePlayer(data?.player.playerId || '');
        const from = data?.prize.angle.from;
        const to = data?.prize.angle.to;
        if (from && to && from > 0 && to > 0) {
          spinTheWheel(getSpinDelta(from, to));
        }
        setTimeout(() => {
          dispatch(setPrizeModalOpened(true));
          dispatch(setIsSpinning(false));
        }, DURATION_OF_SPIN);
      });
    }
  };
  return (
    <Modal>
      <ModalBackground src={modal3} />
      <ModalContent padding={'0'} top={'0'}>
        <EmptySpaceOnTop />
        <LargeText>YOU’VE EARNED</LargeText>
        <PrizeText fontSize="64px">{_spins.getRemainingSpins()}</PrizeText>
        <LargeText>FREE SPINS</LargeText>
        <Image
          onClick={() => {
            if (!isSpinning) spin();
          }}
          cursor={!isSpinning ? 'pointer' : ''}
          src={spinButton}
        />
        <Image src={gizmo} />
        <EmptySpaceOnBottom />
      </ModalContent>
    </Modal>
  );
};
