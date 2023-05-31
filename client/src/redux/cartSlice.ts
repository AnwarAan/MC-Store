import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Carts } from '../interface';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [
      {
        _id: '',
        user: '',
        item: [
          {
            _id: '',
            product: {
              _id: 0,
              name: '',
              price: 0,
              description: '',
              category: '',
              stock: 0,
              rating: 0,
              weight: 0,
              image: '',
            },
            price: 0,
            quantity: 0,
            total: 0,
          },
        ],
        subTotal: 0,
      },
    ],
  } as Carts,

  reducers: {
    getAllCart: (state, action: PayloadAction<any>) => {
      state.cart = action.payload;
    },
  },
});

export const { getAllCart } = cartSlice.actions;
export default cartSlice.reducer;
