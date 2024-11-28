import { createSlice } from '@reduxjs/toolkit';
import { Prize } from '_entities/prize';

interface StoreProps {
  sliderOpen?: boolean;
  isRedeem?: boolean;
  isSpinning?: boolean;
  playerId?: string;
  prize?: Prize;
  prizeModalOpened?: boolean;
}

const initialState = { sliderOpen: false } as StoreProps;

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSliderOpen: (state, action) => {
      state.sliderOpen = action.payload;
    },
    setIsRedeem: (state, action) => {
      state.isRedeem = action.payload;
    },
    setIsSpinning: (state, action) => {
      state.isSpinning = action.payload;
    },
    setPlayerId: (state, action) => {
      state.playerId = action.payload;
    },
    setPrizeModalOpened: (state, action) => {
      state.prizeModalOpened = action.payload;
    },
    setPrize: (state, action) => {
      state.prize = action.payload;
    },
  },
});

export const {
  setSliderOpen,
  setIsRedeem,
  setIsSpinning,
  setPlayerId,
  setPrizeModalOpened,
  setPrize,
} = mainSlice.actions;

export default mainSlice.reducer;
