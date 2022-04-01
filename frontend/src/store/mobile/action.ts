import { MobileEntity, ActionTypes } from "./types";

export interface MobileRequest {
    type: ActionTypes.REQUEST;
}
export interface AddMobileRequest {
    type: ActionTypes.ADD_REQUEST;
    item: MobileEntity
}

export interface MobileSuccess {
    type: ActionTypes.SUCCESS;
    items: MobileEntity[];
}

export interface MobileFailure {
    type: ActionTypes.FAIL;
    error: string;
}

export type Action = MobileRequest | MobileSuccess | MobileFailure;

export const mobileRequest = (): MobileRequest => ({
    type: ActionTypes.REQUEST,
});

export const mobileSuccess = (items: MobileEntity[]): MobileSuccess => ({
    type: ActionTypes.SUCCESS,
    items,
});

export const mobileFailure = (error: string): MobileFailure => ({
    type: ActionTypes.FAIL,
    error,
});

export const addMobileRequest = (item: MobileEntity): AddMobileRequest => ({
    type: ActionTypes.ADD_REQUEST,
    item
});