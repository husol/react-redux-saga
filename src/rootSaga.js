import { fork, all } from 'redux-saga/effects';
import getDogSaga from './redux/sagas/getDogSaga';

export default function* rootSaga() {
    yield all([
        fork(getDogSaga),
    ]);
}