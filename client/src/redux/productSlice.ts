import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../interface';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    product: [
      {
        _id: 0,
        name: '',
        price: 0,
        description: '',
        category: '0',
        stock: 0,
        rating: 0,
        weight: 0,
        image: '',
      },
    ],
  } as Products,

  reducers: {
    getAllProduct: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
    getOneProduct: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
  },
});

export const { getAllProduct, getOneProduct } = productSlice.actions;
export default productSlice.reducer;
