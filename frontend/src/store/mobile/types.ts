
export interface MobileEntity {
    name: string;
    picture: string;
}

export interface MobileState {
    items: MobileEntity[]
    loading: boolean
    hasError: boolean
}

export enum ActionTypes {
    REQUEST = 'MOBILE_REQUEST',
    ADD_REQUEST = 'ADD_MOBILE_REQUEST',
    SUCCESS = 'MOBILE_SUCCESS',
    FAIL = 'MOBILE_FAILURE',
}
