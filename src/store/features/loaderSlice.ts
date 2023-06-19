import { createSlice } from '@reduxjs/toolkit';

interface LoaderState {
  display?: 'flex' | 'none';
}

const initialState: LoaderState = {
  display: 'none',
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    enableLoader: (state): void => {
      state.display = 'flex';
    },
    disableLoader: (state): void => {
      state.display = initialState.display;
    },
  },
});

export const { enableLoader, disableLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
