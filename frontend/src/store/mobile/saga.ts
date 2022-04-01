import Axios from 'axios';
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
    mobileFailure,
    mobileSuccess,
} from './action';
import { ActionTypes, MobileEntity } from './types';

const { BASE_URL } = process.env;

const getMobiles = () => Axios.get<MobileEntity[]>(`${BASE_URL}/mobile`);

function* fetchMobiles() {
    try {
        const items: MobileEntity[] = yield call(getMobiles);
        yield put(mobileSuccess(items));
    } catch (e: any) {
        yield put(mobileFailure(e.message));
    }
}

function* mobileSaga() {
    yield all([takeLatest(ActionTypes.REQUEST, fetchMobiles)]);
}

export default mobileSaga;