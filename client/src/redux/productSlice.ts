import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../interface";

interface Products {
  products: Product[];
  product: Product;
  getProductFail: {
    message: string;
    status: boolean;
    statusCode: number;
  };
}

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {
      product_id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      stock: 0,
      rating: 0,
      weight: 0,
      image: "",
    },
    getProductFail: {
      message: "",
      status: true,
      statusCode: 200,
    },
  } as Products,

  reducers: {
    getProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    getOneProduct: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },

    responseFail: (state, action: PayloadAction<any>) => {
      state.getProductFail = action.payload;
    },
  },
});

export const { getProducts, getOneProduct, responseFail } = productSlice.actions;
export default productSlice.reducer;
