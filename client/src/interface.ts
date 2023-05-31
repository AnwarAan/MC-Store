export interface ChildrenProps {
  children: JSX.Element;
}

export interface ResponseFail {
  responseFail: {
    message: string;
    status: boolean;
    statusCode: number;
  };
}

enum Category {
  electronic = 'electronic',
  food = 'food',
  beverag = 'beverage',
  fashion = 'fashion',
  accessories = 'accessories',
}

export interface Product {
  _id: number;
  name: string;
  price: number;
  category: string | Category;
  stock: number;
  weight: number;
  description: string;
  rating: number;
  image: string;
}

export interface Products {
  product: Product[];
}

export interface ProductProps {
  product: {
    _id: number;
    name: string;
    price: number;
    category: string | Category;
    stock: number;
    weight: number;
    description: string;
    rating: number;
    image: string;
  };
}

export interface Item {
  _id: string;
  product: Product;
  quantity: number;
  price: number;
  total: number;
}

export interface ItemProps {
  item: {
    _id: string;
    product: Product;
    quantity: number;
    price: number;
    total: number;
  };
}

export interface Cart {
  _id: string;
  user: string;
  item: Item[];
  subTotal: number;
}

export interface Carts {
  cart: Cart[];
}

export interface CartsProps {
  cart: Cart[];
}
