import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Thunk } from 'store/types'
import { MobileEntity, MobileState } from './types'

const { BASE_URL } = process.env;

export const initialState: MobileState = {
    items: [],
    loading: false,
    hasError: false,
}

const mobile = createSlice({
    name: 'mobile',
    initialState,
    reducers: {
        request(state) {
            state.loading = true
        },
        success(state, action: PayloadAction<MobileEntity[]>) {
            state.loading = false
            state.hasError = false
            state.items = action.payload
        },
        failure(state) {
            state.loading = false
            state.hasError = true
        },
    },
})

export const { reducer } = mobile

export const { request, success, failure } = mobile.actions

export const getMobiles = (): Thunk => {
    return async (dispatch) => {
        dispatch(request())
        try {
            const { data } = await axios.get(`${BASE_URL}/mobile`)
            dispatch(success(data))
        } catch (e) {
            dispatch(failure())
        }
    }
}