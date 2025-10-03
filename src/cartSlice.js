import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      if (!state.items[id]) {
        state.items[id] = 0;
      }
      state.items[id] += 1;
      state.totalCount += 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.items[id] && state.items[id] > 0) {
        state.items[id] -= 1;
        state.totalCount -= 1;
        if (state.items[id] === 0) {
          delete state.items[id];
        }
      }
    },
    removeOne: (state, action) => {
      const id = action.payload;
      if (state.items[id] && state.items[id] > 0) {
        state.items[id] -= 1;
        state.totalCount -= 1;
        if (state.items[id] === 0) {
          delete state.items[id];
        }
      }
    },
    removeAll: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.totalCount -= state.items[id];
        delete state.items[id];
      }
    },
  },
});

export const { increment, decrement, removeOne, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
