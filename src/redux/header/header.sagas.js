import {all,call,takeLatest,put} from 'redux-saga/effects';
import HeaderActionTypes from './header.types';
import {toggleDrawer} from './header.actions';

export function* toggleDrawerCheck({ payload:{anchor,open,event} }){
    if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }else
       yield put(toggleDrawer({anchor,open}));
    }

export function* onToggleDrawerCheck(){
 yield takeLatest(HeaderActionTypes.TOGGLE_DRAWER_CHECK,toggleDrawerCheck);
}

export function* headerSagas(){
    yield all([
        call(onToggleDrawerCheck)
    ]);
}