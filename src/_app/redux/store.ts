import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducers/mainReducer';
import { baseApi } from '_shared/api';

const store = configureStore({
  reducer: {
    main: mainReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
