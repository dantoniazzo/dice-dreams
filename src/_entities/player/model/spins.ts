import { useAppSelector } from '_app/redux';
import { playerApi } from '../api/playerApi';

export const useSpins = () => {
  const playerId = useAppSelector((state) => state.main.playerId);

  const { data } = playerApi.endpoints.getPlayer.useQueryState(playerId || '');

  const getRemainingSpins = () => {
    if (!data) return 0;
    return data.totalSpins - data.usedSpins;
  };

  return {
    getRemainingSpins,
  };
};
