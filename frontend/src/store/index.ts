import { combineReducers } from "redux";

import MobileReducer from "./mobile/reducer";
import { MobileState } from "./mobile/types";

export interface ApplicationState {
    mobile: MobileState;
}

export const createRootReducer = () =>
    combineReducers({
        mobile: MobileReducer,
    });