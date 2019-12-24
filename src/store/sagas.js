import { call, put, takeLatest } from 'redux-saga/effects';

import {
    LOAD_DATA
} from './actionTypes';
import {
    isLoadData, successLoadData, failLoadData
}from './actions';



function* loadDataSaga(action){
    try {
        yield put(isLoadData());

        const response = yield call(fetch, action.url);
        const data = yield call([response, response.json]);

        yield put(successLoadData(data));
    } catch(error) {
        yield put(failLoadData(error));
    }
}


export default function* subscribeForLoadData(){
    yield takeLatest(LOAD_DATA, loadDataSaga);
    // yield takeLatest(ADD_ROW, addRowSaga);
}