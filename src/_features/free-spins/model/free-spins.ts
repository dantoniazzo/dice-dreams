import { useAppDispatch, setFreeSpins } from '_app/redux';
export const useFreeSpins = () => {
  const dispatch = useAppDispatch();
  const generateFreeSpins = () => {
    dispatch(setFreeSpins(4));
  };

  return {
    generateFreeSpins,
  };
};
