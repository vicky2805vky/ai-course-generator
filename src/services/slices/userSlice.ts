import { userStateType } from "@/types/userSliceTypes";
import { createSlice } from "@reduxjs/toolkit";
import { checkApi, getUser } from "../api/userApi";
import { toast } from "sonner";

const initialState: userStateType = {
  userId: "",
  apiKey: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (_, action) => {
        if (action.payload) return action.payload;
      })
      .addCase(checkApi.fulfilled, (_, action) => {
        if (action.payload) {
          toast("account successfully activated");
          return action.payload;
        } else {
          toast("invalid api key");
        }
      });
  },
});

export default userSlice.reducer;
