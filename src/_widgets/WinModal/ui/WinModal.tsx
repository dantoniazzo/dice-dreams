import { Dialog, MediumText, ModalContent } from '_shared/ui';
import { Modal } from '_shared/ui';
import modal2 from '/modal-2.png';
import { PADDING, TOP } from '../lib/constants';
import christmasDice from '/christmas-dice.png';
import redeemButton from '/redeem-button.png';
import { PrizeText, Image } from '_shared/ui';
import {
  useAppSelector,
  useAppDispatch,
  setIsRedeem,
  setPrizeModalOpened,
} from '_app/redux';
import { useSpins } from '_entities/player';

export const WinModal = () => {
  const prizeModalOpened = useAppSelector(
    (state) => state.main.prizeModalOpened
  );
  const prize = useAppSelector((state) => state.main.prize);
  const _spins = useSpins();
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setOpen(false);
    if (_spins.getRemainingSpins() === 0) {
      dispatch(setIsRedeem(true));
    }
  };

  const setOpen = (opened: boolean) => {
    dispatch(setPrizeModalOpened(opened));
  };

  return (
    <Dialog open={prizeModalOpened} setOpen={setOpen}>
      <Modal>
        <Image src={modal2} />
        <ModalContent justifyContent="space-around" padding={PADDING} top={TOP}>
          <MediumText>You’ve Won</MediumText>
          <PrizeText>{prize?.name}</PrizeText>
          <Image src={christmasDice} />
          <MediumText>Redeem Your Prize Inside The Game</MediumText>
          <Image cursor="pointer" onClick={closeModal} src={redeemButton} />
        </ModalContent>
      </Modal>
    </Dialog>
  );
};
