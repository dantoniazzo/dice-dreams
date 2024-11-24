import { getRewardsElement } from "_widgets/Wheel";

export const NUM_OF_SPINS = 5;
const baseDurationPerSpin = 1000; // 1 second per spin
const baseMinInterval = 100; // Base minimum interval (fastest clicking)
const baseMaxInterval = 1000; // Base maximum interval (slowest clicking)

let startTime = 0;
const clickSound = new Audio("/wheel-spin-click.wav");

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

const playClick = () => {
  clickSound.currentTime = 0;
  clickSound.play();
};

const spinVisually = () => {
  const rewardsElement = getRewardsElement();
  if (rewardsElement) {
    const currentRotation = getCurrentRotation();
    const delta = Math.random() * 4 - 2;
    const finalNumOfSpins = NUM_OF_SPINS + delta;
    const spinDuration = finalNumOfSpins * baseDurationPerSpin; // e.g., 3 spins = 3 seconds

    rewardsElement.style.transition = `transform ${
      spinDuration / 1000
    }s ease-out`;
    rewardsElement.style.transform = `scale(0.85) rotate(${
      (currentRotation || 0) + finalNumOfSpins * 360
    }deg)`;
    return { finalNumOfSpins, spinDuration };
  }
};

const startAudio = (numOfSpins: number, spinDuration: number) => {
  const minInterval = baseMinInterval / numOfSpins; // Faster clicks for more spins
  const maxInterval = baseMaxInterval / numOfSpins; // Faster slowing for more spins
  // Start the clicking sound
  const clickSound = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const progress = elapsed / spinDuration;

    if (progress >= 1) {
      clearInterval(clickSound); // Stop sound when spin ends
      return;
    }

    // Calculate the interval dynamically based on progress
    const interval = minInterval + (maxInterval - minInterval) * progress;

    // Play click sound
    playClick();

    // Adjust interval timing
    clearInterval(clickSound);
    setTimeout(() => startAudio(numOfSpins, spinDuration), interval);
  }, minInterval);
};

export const spinTheWheel = () => {
  const visual = spinVisually();
  startTime = Date.now();
  if (visual && visual.finalNumOfSpins && visual.spinDuration)
    startAudio(visual.finalNumOfSpins, visual.spinDuration);

  return visual;
};
