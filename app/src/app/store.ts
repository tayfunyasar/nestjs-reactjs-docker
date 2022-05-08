import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mobileReducer from '../routes/Mobile/mobileSlice';

export const store = configureStore({
  reducer: {
    mobile: mobileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
