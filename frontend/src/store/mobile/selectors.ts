import { InitialState } from 'store/types';

export const isLoading = (state: InitialState) => state.mobile.loading;
export const hasError = (state: InitialState) => state.mobile.hasError;
export const getMobiles = (state: InitialState) => state.mobile.items;