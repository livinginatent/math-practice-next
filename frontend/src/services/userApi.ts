import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import type { Action, PayloadAction } from "@reduxjs/toolkit";

type RootState = any; // normally inferred from state
function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/api/me",
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: "/api/updateUser",
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,

  util: { getRunningQueriesThunk },
} = userApi;
