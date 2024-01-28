import { URL } from "@/constants/url.constants";
import { trackForMutations } from "@reduxjs/toolkit/dist/immutableStateInvariantMiddleware";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
