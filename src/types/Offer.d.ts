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

