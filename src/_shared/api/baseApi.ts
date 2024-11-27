// ** RTK Query Imports
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// ** Tags
import tags from "./tags";
import { envVars } from "_shared/config";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${envVars.api.https}/api/v1`,
    credentials: "include",
  }),
  tagTypes: [tags.PLAYER],
  endpoints: () => ({}),
});
