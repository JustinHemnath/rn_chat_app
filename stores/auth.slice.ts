import { createSlice } from "@reduxjs/toolkit";

export type TUserDetails = {
  id: string;
  name: string;
  email: string;
};

export type TAuth = {
  userDetails: TUserDetails | undefined;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      userDetails: undefined,
    } as TAuth,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.value = { userDetails: action.payload };
    },
  },
});

export const { setUserDetails } = authSlice.actions;
export default authSlice.reducer;
