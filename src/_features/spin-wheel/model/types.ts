export interface WheelSpinRequest {
  playerId: string;
}

export interface WheelSpinResponse {
  player: {
    playerId: string;
    totalSpins: number;
    usedSpins: number;
  };
  prize: {
    id: string;
    name: string;
    angle: {
      from: number;
      to: number;
    };
  };
}
