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
  category: Category | undefined;
};

export type Category = {
  id: number;
  url: string;
  name: string;
}

export type Errors = {
  [title:string]: string | undefined;
  price: string | undefined;
  author?: string | undefined;
  country?: string | undefined;
  phone?: string | undefined;
  category: string | undefined;
}

export type User = {
  id: number;
  username: string;
  password: string;
  offers: Offer[] | undefined;
}

export type ImagePreviewType = {
  preview: string;
  data: File;
}

