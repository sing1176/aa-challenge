import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  value: [];
  selectedImageId: string | null;
}

const initialState: DataState = {
  value: [],
  selectedImageId: null,
};





export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<[]>) => {
			state.value = action.payload;
		},
		setSelected: (state, action: PayloadAction<string>) => {
			state.selectedImageId = action.payload;
		},
	},
});

export const { setData , setSelected} = dataSlice.actions;

export default dataSlice.reducer;





