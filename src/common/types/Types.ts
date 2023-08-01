export  type Offer = {
  id: number | null;
  images: string[];
  title: string;
  description: string;
  price: number | null;
  date: string;
  author: string;
  country: string;
  phone: string;
  category: string;
};

export type Category = {
  url: string;
  name: string;
}

export type Errors = {
  id: boolean;
  images: boolean;
  title: boolean;
  description: boolean;
  price: boolean;
  date: boolean;
  author: boolean;
  country: boolean;
  phone: boolean;
  category: boolean;
}

