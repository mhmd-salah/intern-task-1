import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TProduct } from "../../types/index";
export type TSimpleProduct = Pick<
  TProduct,
  "id" | "title" | "price" | "thumbnail" | "category"
>;

interface CartItem extends TSimpleProduct {
  quantity: number;
}

interface IState {
  items: CartItem[];
}

const initialState: IState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TSimpleProduct>) => {
      const existing = state.items.find((i) => i.id == action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      console.log(JSON.parse(JSON.stringify(state.items)));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const existing = state.items.find((i) => i.id === action.payload);
      if (existing) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity = item.quantity === 0 ? 1 : item.quantity + 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity === 0) {
          item.quantity = 0;
        } else {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
