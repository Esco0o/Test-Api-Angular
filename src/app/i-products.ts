export interface Iproduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
  }
  
  interface IRating {
    rate: number;
    count: number;
  }
