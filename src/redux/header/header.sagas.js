import {all,call,takeLatest,put} from 'redux-saga/effects';
import HeaderActionTypes from './header.types';
// import toggleAppBar from './header.actions';

// export function* toggleAppBar(){
//  yield put(toggleAppBar);
// }

// export function* onToggleAppBar(){
//  yield takeLatest(HeaderActionTypes.TOGGLE_APPBAR_HIDDEN,toggleAppBar);
// }

export function* headerSagas(){
    yield all([]);
}