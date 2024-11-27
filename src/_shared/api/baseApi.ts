// ** RTK Query Imports
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// ** Tags
import tags from "./tags";
import { envVars } from "_shared/config";
import { IErrorResponse } from "_shared/model/types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, IErrorResponse, object>>(
    fetchBaseQuery({
      baseUrl: `${envVars.api.https}/api/v1`,
      credentials: "include",
    })
  ),
  tagTypes: [tags.PLAYER],
  endpoints: () => ({}),
});
