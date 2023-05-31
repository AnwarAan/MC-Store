//User
export interface User {
  name: string;
  password: string;
  email: string;
  balance: number;
}

export interface UserUpdate {
  name?: string;
  password?: string;
  email?: string;
  balance?: number;
}

export interface UserPage {
  name?: string;
  limit: number;
  page: number;
}

export interface Login {
  password: string;
  email: string;
}

//Product
export interface Product {
  name: string;
  price: number;
  description: string;
  stock: number;
  weight: number;
  image: string;
}

export interface ProductUpdate {
  name?: string;
  price?: number;
  description?: string;
  stock?: number;
  weight?: number;
  image?: string;
}

export interface ProductPage {
  name?: object;
  limit: number;
  page: number;
}

//Cart
export interface Item {
  productId: string;
  price: number;
  quantity: number;
  total: number;
}

export interface Cart {
  userId: string;
  item: Item[];
  subTotal: number;
}
