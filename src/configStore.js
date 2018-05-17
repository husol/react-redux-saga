import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

//Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);
//store.subscribe(() => console.log(store.getState()));

//Run the saga
sagaMiddleware.run(rootSaga);

export default store