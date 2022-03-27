import {all,call} from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import {headerSagas} from './header/header.sagas';


export default function* rootSaga(){
    yield all([call(userSagas),call(headerSagas)]);
}