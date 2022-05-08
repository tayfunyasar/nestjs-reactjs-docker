import { RootState } from '../../app/store';

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.mobile.value)`
export const selectItems = (state: RootState) => state.mobile.items;
