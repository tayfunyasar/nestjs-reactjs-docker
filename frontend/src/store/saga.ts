import { all, fork } from "redux-saga/effects";

import mobileSaga from "./mobile/saga";

export default function* rootSaga() {
    yield all([fork(mobileSaga)]);
}