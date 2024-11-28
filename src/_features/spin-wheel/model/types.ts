import { Prize } from '_entities/prize';

export interface WheelSpinRequest {
  playerId: string;
}

export interface WheelSpinResponse {
  player: {
    playerId: string;
    totalSpins: number;
    usedSpins: number;
  };
  prize: Prize;
}
