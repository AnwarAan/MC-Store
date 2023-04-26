export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUser {
  name?: string;
  email?: string;
  password?: string;
}

export interface UserUpdate {
  name: string;
  password: string;
}

export interface Pagination {
  page: number;
  limit: number;
}

enum Category {
  electronic = "electronic",
  food = "food",
  beverage = "beverage",
  fashion = "fashion",
  accessories = "accessories",
}

export interface Product {
  title: string;
  price: number;
  category: Category;
  stock: number;
  weight: number;
  description: string;
  rating: number;
  image: string;
}

export interface ProductUpdate {
  title?: string;
  price?: number;
  category?: Category;
  description?: string;
  image?: string;
}
