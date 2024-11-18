import { createSlice } from '@reduxjs/toolkit';

interface StoreProps {
  sliderOpen?: boolean;
}

const initialState = { sliderOpen: false } as StoreProps;

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSliderOpen: (state, action) => {
      state.sliderOpen = action.payload;
    },
  },
});

export const { setSliderOpen } = mainSlice.actions;

export default mainSlice.reducer;
