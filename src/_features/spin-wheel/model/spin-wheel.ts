import { getRewardsElement } from '_widgets/Wheel';

export const NUM_OF_SPINS = 3;

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

export const playSpinSound = () => {
  window.__WHEEL_SPIN_AUDIO__.play();
};

const spinVisually = (spinDelta: number) => {
  const rewardsElement = getRewardsElement();
  if (rewardsElement) {
    const finalNumOfSpins = NUM_OF_SPINS + spinDelta;
    const spinDuration = 2500;
    rewardsElement.style.transition = 'transform 0s';
    rewardsElement.style.transform = `scale(0.85) rotate(22.5deg)`;
    setTimeout(() => {
      rewardsElement.style.transition = `transform ${
        spinDuration / 1000
      }s ease-out`;
      rewardsElement.style.transform = `scale(0.85) rotate(${
        22.5 - finalNumOfSpins * 360
      }deg)`;
    }, 20);

    return { finalNumOfSpins, spinDuration };
  }
};

export const spinTheWheel = (spinDelta: number) => {
  // We need CSS to see rendered element before calculating spin, so we do it async with setTimeout
  setTimeout(() => {
    spinVisually(spinDelta);
  });
  playSpinSound();
  setTimeout(() => {
    window.__WHEEL_SPIN_AUDIO__.currentTime = 0;
  }, window.__WHEEL_SPIN_AUDIO__.duration);
};
