import { takeLatest, call, put } from "redux-saga/effects";
import { fetchDog } from '../api/getDogApi'
import {API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE} from '../actionTypes'

//Watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}

//Worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchDog);
        const dog = response.data.message;

        //Dispatch a success action to the store with the new dog
        yield put({ type: API_CALL_SUCCESS, dog: dog });

    } catch (error) {
        //Dispatch a failure action to the store with the error
        yield put({ type: API_CALL_FAILURE, error: error.message });
    }
}