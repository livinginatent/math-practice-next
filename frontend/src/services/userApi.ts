// services/userApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import type { Action, PayloadAction } from "@reduxjs/toolkit";

type RootState = any // normally inferred from state
function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}
export const userApi = createApi({
    
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/api/me",
    }),
  }),
});

export const {
  useGetUserQuery,

  util: { getRunningQueriesThunk },
} = userApi;
