import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastrState {
  active?: boolean;
  message: string;
  type?: 'error' | 'success' | 'info' | 'warning';
}

const initialState: ToastrState = {
  active: false,
  message: '',
  type: 'success',
};

export const toastrSlice = createSlice({
  name: 'toastr',
  initialState,
  reducers: {
    enableToastr: (state, action: PayloadAction<ToastrState>): void => {
      state.active = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    disableToastr: (state): void => {
      state.active = false;
      state.message = initialState.message;
    },
  },
});

export const { enableToastr, disableToastr } = toastrSlice.actions;

export default toastrSlice.reducer;
