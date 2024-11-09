import { getRewardsElement } from '_widgets/Wheel';

export const NUM_OF_SPINS = 5;

const getCurrentRotation = () => {
  const rewardsElement = getRewardsElement();
  if (!rewardsElement) return 0;
  return parseInt(
    rewardsElement.style.transform.slice(
      rewardsElement.style.transform.indexOf('rotate(') + 7,
      rewardsElement.style.transform.indexOf('deg)')
    )
  );
};

export const spinTheWheel = () => {
  const rewardsElement = getRewardsElement();
  if (rewardsElement) {
    const currentRotation = getCurrentRotation();
    console.log('Current rotation: ', currentRotation);
    const delta = Math.random() * 4 - 2;
    const finalNumOfSpins = NUM_OF_SPINS + delta;
    console.log('Final number of spins: ', finalNumOfSpins);
    rewardsElement.style.transform = `scale(0.85) rotate(${
      (currentRotation || 0) + finalNumOfSpins * 360
    }deg)`;
  }
  return void 0;
};
