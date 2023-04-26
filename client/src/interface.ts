enum Category {
  electronic = "electronic",
  food = "food",
  beverag = "beverage",
  fashion = "fashion",
  accessories = "accessories",
}

export interface Product {
  product_id: number;
  title: string;
  price: number;
  category: string | Category;
  stock: number;
  weight: number;
  description: string;
  rating: number;
  image: string;
}

export interface ProductProps {
  product_id?: number;
  title?: string;
  price?: number;
  category?: string | Category;
  stock?: number;
  weight?: number;
  description?: string;
  rating?: number;
  image?: string;
}
