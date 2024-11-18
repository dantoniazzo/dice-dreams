import { createSlice } from '@reduxjs/toolkit';

interface StoreProps {
  sliderOpen?: boolean;
  freeSpins?: number;
}

const initialState = { sliderOpen: false } as StoreProps;

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
  },
});

export const { setSliderOpen, setFreeSpins } = mainSlice.actions;

export default mainSlice.reducer;
