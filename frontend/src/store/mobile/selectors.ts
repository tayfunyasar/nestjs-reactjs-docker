import { RootState } from 'store/types';

export const isLoading = (state: RootState) => state.mobile.loading;
export const hasError = (state: RootState) => state.mobile.hasError;
export const getMobiles = (state: RootState) => state.mobile.items;