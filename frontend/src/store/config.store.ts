import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

declare global {
    interface Window {
        devToolsExtension: any;
    }
}

export function configureStore() {
    // create a list for middlewares.
    const middlewares = [];

    // create a saga middleware
    const sagaMiddleware = createSagaMiddleware();

    // append saga middleware into the middleware list
    middlewares.push(sagaMiddleware);

    // create a store with reducers and middlewares.
    const enhancer =
        window.devToolsExtension && process.env.NODE_ENV !== 'production'
            ? compose(applyMiddleware(...middlewares), window.devToolsExtension())
            : applyMiddleware(...middlewares);

    const store = createStore(rootReducer, enhancer);

    // run saga middleware.
    sagaMiddleware.run(rootSaga);

    return store;
}