import { useAppDispatch, setSliderOpen, useAppSelector } from '_app/redux';

export const useSliderMutation = () => {
  const dispatch = useAppDispatch();
  const sliderOpen = useAppSelector((state) => state.main.sliderOpen);
  const openSlider = () => {
    dispatch(setSliderOpen(true));
  };

  const closeSlider = () => {
    dispatch(setSliderOpen(false));
  };

  const toggleSlider = () => {
    dispatch(setSliderOpen(!sliderOpen));
  };

  return {
    openSlider,
    closeSlider,
    toggleSlider,
  };
};
