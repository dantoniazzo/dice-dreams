import { baseApi, TAGS } from "_shared/api";
import { WheelSpinRequest, WheelSpinResponse } from "../model/types";

export const wheelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    spinWheel: build.mutation<WheelSpinResponse, WheelSpinRequest>({
      query: (body) => ({
        url: "/wheel/spin",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.WHEEL],
    }),
  }),
});

export const { useSpinWheelMutation } = wheelApi;
