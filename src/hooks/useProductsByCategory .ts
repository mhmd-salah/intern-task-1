import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import type { TProduct } from "../types/index";

export const useGetProductsByCategory = (category: string, limit: number) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<{ products: TProduct[] }> => {
      const res = await api.get(
        `/products/category/${category}?limit=${limit}`
      );
      return res.data.products ?? [];
    },
  });
};
