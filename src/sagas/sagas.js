import { all, call, put, takeEvery, spawn, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
//import { push } from 'react-router-redux'
import agent from '../agents'

import {
    getUsers,
    getUsersSuccess,
    getUsersFailure,
    login,
    login_success,
    login_faliure,
} from '../actions/actions';
import {
    USERS_GET,
    USERS_SUCCESS,
    USERS_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FALIURE,
} from '../constants/constants';

//import * as routes from '../constants/routes'

function *getUsersSaga () {
  try {
    const data = yield call(agent.Users.get)
    console.log(data)
    yield put(getUsersSuccess(data))
  } catch (error) {
    yield put(getUsersFailure(error))
  }
}

function* loginFunc(action) {
    try {
        const response = yield axios.post('someAPi', action.payload);
        if (response.status === 200) {
            let token = (response.data)?response.data.token.split(" "):null
            if (token) {
                localStorage.setItem('token', token[1])
            }
            yield put(login_success(response.data));
        }
    } catch (err) {
        console.log(err);
        yield put(login_faliure(err));
    }
}


function* usersSagas () {
  yield takeLatest(USERS_GET, getUsersSaga);
}

function* loginSaga () {
  yield takeLatest(LOGIN, loginFunc);
}



export default function* rootSaga() {
  yield all([
    usersSagas(),
    loginSaga(),
  ])
}