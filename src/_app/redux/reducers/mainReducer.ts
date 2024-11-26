import { createSlice } from "@reduxjs/toolkit";
import { Prizes } from "_entities/prize";

interface StoreProps {
  sliderOpen?: boolean;
  freeSpins?: number;
  isRedeem?: boolean;
  prize: Prizes | null;
  isSpinning?: boolean;
}

const initialState = { sliderOpen: false, prize: null } as StoreProps;

export const mainSlice = createSlice({
  name: "main",
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
    setIsRedeem: (state, action) => {
      state.isRedeem = action.payload;
    },
    setIsSpinning: (state, action) => {
      state.isSpinning = action.payload;
    },
  },
});

export const {
  setSliderOpen,
  setFreeSpins,
  setPrize,
  setIsRedeem,
  setIsSpinning,
} = mainSlice.actions;

export default mainSlice.reducer;
