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
      .addCase(checkApi.fulfilled, (state, action) => {
        if (action.payload) {
          if (state.userId) {
            toast("api key updated successfully");
          } else {
            toast("account successfully activated");
          }
          return action.payload;
        } else {
          toast("invalid api key");
        }
      });
  },
});

export default userSlice.reducer;
