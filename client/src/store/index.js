import {configureStore} from "@reduxjs/toolkit";
import planesSlice from "./planes/planesSlice";
import planeSlice from "./plane/planeSlice";

export const store = configureStore(({
  reducer: {
    planes: planesSlice,
    plane: planeSlice
  }
}));