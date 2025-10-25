import type { RootState } from "../..";

export const selectTotalPrice = (state: RootState) => {
  return state.cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
};
