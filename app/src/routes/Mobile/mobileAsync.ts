import { addMobileApi, getMobileApi, updateMobileApi } from './mobileApi';
import { MobileState, MobileEntity } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const getMobileAsync = createAsyncThunk(
    'mobile/getMobileAsync',
    async () => {
        const response = await getMobileApi();
        return response.data;
    }
);

export const addMobileAsync = createAsyncThunk(
    'mobile/addMobileAsync',
    async (_entity: MobileEntity, thunkApi) => {
        const response = await addMobileApi(_entity);
        // The value we return becomes the `fulfilled` action payload
        thunkApi.dispatch(getMobileAsync());
        return response.data;
    }
);

export const updateMobileAsync = createAsyncThunk(
    'mobile/updateMobileAsync',
    async (_entity: MobileEntity, thunkApi) => {
        const response = await updateMobileApi(_entity);
        // The value we return becomes the `fulfilled` action payload
        thunkApi.dispatch(getMobileAsync());
        return response.data;
    }
);