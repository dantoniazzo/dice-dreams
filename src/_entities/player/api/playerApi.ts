import { baseApi, TAGS } from "_shared/api";
import { PlayerResponse } from "../model/types";

export const playerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPlayer: build.query<PlayerResponse, string>({
      query: (playerId) => `/players/${playerId}`,
      providesTags: [TAGS.PLAYER],
    }),
  }),
});

export const { useLazyGetPlayerQuery } = playerApi;
