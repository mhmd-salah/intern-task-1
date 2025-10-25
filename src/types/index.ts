type ReactI18NextChildren = React.ReactNode;

export interface TProduct {
  comment: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  reviewerName: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  thumbnail: string;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}
// loading

export type TLoading = "idle" | "pending" | "success" | "failed";
