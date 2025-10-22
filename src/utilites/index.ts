import type { TSimpleProduct } from "../store/cart/cartSlice";
import type { TProduct } from "../types/index";

export const toSimpleProduct = (p: TProduct): TSimpleProduct => ({
  id: p.id,
  title: p.title,
  price: p.price,
  thumbnail: p.thumbnail,
  category: p.category,
});
