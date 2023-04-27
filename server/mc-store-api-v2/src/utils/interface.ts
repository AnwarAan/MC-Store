export interface User {
  name: string;
  email: string;
  password: string;
  new_password: string;
  balance: number;
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
  image: string;
}

export interface ProductUpdate {
  title?: string;
  price?: number;
  stock?: number;
  weight?: number;
  category?: Category;
  description?: string;
  image?: string;
}
