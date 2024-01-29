import { URL } from "@/constants/url.constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { trackForMutations } from "@reduxjs/toolkit/dist/immutableStateInvariantMiddleware";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { ToastAndroid } from "react-native";

export const saveUserThunk = createAsyncThunk("saveUserThunk", async (payload: { name: string | null; email: string | null }, Thunk) => {
  const { name, email } = payload;

  try {
    const response = await axios({
      method: "POST",
      url: URL + "/user",
      data: {
        name,
        email,
      },
    });

    return response.data;
  } catch (err: any) {
    ToastAndroid.showWithGravity("Failed to log you in", ToastAndroid.SHORT, ToastAndroid.TOP);
    console.log(err.message);
  }
});

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (arg) => {
        const { name, email } = arg;
        return {
          url: "/user",
          method: "POST",
          body: {
            name,
            email,
          },
        };
      },
      transformResponse: (response: any, meta, arg: any) => {
        console.log(response);
        return response;
      },
    }),
  }),
});

export const { useCreateUserMutation } = usersApi;
