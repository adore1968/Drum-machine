import { configureStore } from "@reduxjs/toolkit";
import drumMachineSlice from "../features/drum machine/drumMachineSlice";

export const store = configureStore({
  reducer: { drumMachineSlice },
});
