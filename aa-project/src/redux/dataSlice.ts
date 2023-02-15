import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  value: [];
}

const initialState: DataState = {
  value: [],
};



export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    }
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;





