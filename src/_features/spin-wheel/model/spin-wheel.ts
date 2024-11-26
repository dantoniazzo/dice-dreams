import { getRewardsElement } from "_widgets/Wheel";

export const NUM_OF_SPINS = 3;

const getCurrentRotation = () => {
  const rewardsElement = getRewardsElement();
  if (!rewardsElement) return 0;
  return parseInt(
    rewardsElement.style.transform.slice(
      rewardsElement.style.transform.indexOf("rotate(") + 7,
      rewardsElement.style.transform.indexOf("deg)")
    )
  );
};

export const playSpinSound = () => {
  window.__WHEEL_SPIN_AUDIO__.play();
};

const spinVisually = () => {
  const rewardsElement = getRewardsElement();
  if (rewardsElement) {
    const currentRotation = getCurrentRotation();
    const delta = Math.random();
    const finalNumOfSpins = NUM_OF_SPINS + delta;
    const spinDuration = 2500;

    rewardsElement.style.transition = `transform ${
      spinDuration / 1000
    }s ease-out`;
    rewardsElement.style.transform = `scale(0.85) rotate(${
      (currentRotation || 0) + finalNumOfSpins * 360
    }deg)`;
    return { finalNumOfSpins, spinDuration };
  }
};

export const spinTheWheel = () => {
  spinVisually();
  playSpinSound();
  setTimeout(() => {
    window.__WHEEL_SPIN_AUDIO__.currentTime = 0;
  }, window.__WHEEL_SPIN_AUDIO__.duration);
};
