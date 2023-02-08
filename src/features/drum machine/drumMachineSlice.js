import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previewText: "",
};

export const drumMachineSlice = createSlice({
  name: "drumMachine",
  initialState,
  reducers: {
    setPreviewText: (state, action) => {
      return { ...state, previewText: action.payload };
    },
  },
});

export const { setPreviewText } = drumMachineSlice.actions;
export default drumMachineSlice.reducer;
