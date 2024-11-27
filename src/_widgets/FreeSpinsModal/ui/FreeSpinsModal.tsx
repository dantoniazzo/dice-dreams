import {
  LargeText,
  Modal,
  ModalBackground,
  ModalContent,
  PrizeText,
  Image,
} from "_shared/ui";
import modal3 from "/modal-3.png";
import { PADDING, TOP } from "../lib/constants";
import spinButton from "/spin-button.png";
import gizmo from "/gizmo.png";
import { setIsSpinning, setPrize, useAppSelector } from "_app/redux";
import { spinTheWheel } from "_features/spin-wheel";
import { useAppDispatch, setFreeSpins } from "_app/redux";
import { DURATION_OF_SPIN } from "_widgets/Wheel";
import { Prizes } from "_entities/prize";
import { useSpinWheelMutation } from "_features/spin-wheel";

export const FreeSpinsModal = () => {
  const isSpinning = useAppSelector((state) => state.main.isSpinning);
  const freeSpins = useAppSelector((state) => state.main.freeSpins);
  const dispatch = useAppDispatch();
  const [handleSpinWheel] = useSpinWheelMutation();
  const spin = () => {
    if (freeSpins && freeSpins > 0) {
      dispatch(setIsSpinning(true));
      setTimeout(() => {
        spinTheWheel();
      });

      dispatch(setFreeSpins(freeSpins - 1));
      setTimeout(() => {
        dispatch(setPrize(Prizes.JACKPOT));
        dispatch(setIsSpinning(false));
      }, DURATION_OF_SPIN);
    }
  };
  return (
    <Modal>
      <ModalBackground src={modal3} />
      <ModalContent padding={PADDING} top={TOP}>
        <LargeText>YOU’VE EARNED</LargeText>
        <PrizeText fontSize="64px">{freeSpins}</PrizeText>
        <LargeText>FREE SPINS</LargeText>
        <Image
          onClick={() => {
            if (!isSpinning) spin();
          }}
          cursor={!isSpinning ? "pointer" : ""}
          src={spinButton}
        />
        <Image src={gizmo} />
      </ModalContent>
    </Modal>
  );
};
