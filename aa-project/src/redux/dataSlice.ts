import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  value: [];
  selectedImageId: string | null;
  favoriteImages: string[];
  selectedTab: string;
  selectedImage: any;
}

const initialState: DataState = {
  value: [],
  selectedImageId: null,
  selectedImage: null,
  favoriteImages: [],
  selectedTab: 'Recently added',
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
    setFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteImages.push(action.payload);
    },
   setTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },
    setSelectedImage: (state, action: PayloadAction<any>) => {
      state.selectedImage = action.payload;
    }
	},
});

export const { setData, setSelected, setFavorite, setTab, setSelectedImage } =
	dataSlice.actions;

export default dataSlice.reducer;





