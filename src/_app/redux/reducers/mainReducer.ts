import { createSlice } from '@reduxjs/toolkit';
import { Prizes } from '_entities/prize';

interface StoreProps {
  sliderOpen?: boolean;
  freeSpins?: number;
  prize: Prizes | null;
}

const initialState = { sliderOpen: false, prize: null } as StoreProps;

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSliderOpen: (state, action) => {
      state.sliderOpen = action.payload;
    },
    setFreeSpins: (state, action) => {
      state.freeSpins = action.payload;
    },
    setPrize: (state, action) => {
      state.prize = action.payload;
    },
  },
});

export const { setSliderOpen, setFreeSpins, setPrize } = mainSlice.actions;

export default mainSlice.reducer;
