import {
    USERS_GET,
    USERS_SUCCESS,
    USERS_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FALIURE,
} from '../constants/constants';


export const getUsers = () => ({
  type: USERS_GET
})

export const getUsersSuccess = users => ({
  type: USERS_SUCCESS,
  users
})

export const getUsersFailure = error => ({
  type: USERS_FAILURE,
  error
})

export const login = data =>({
	type:LOGIN,
	payload:data
})

export const login_success = (token) =>({
	type:LOGIN_SUCCESS,
	payload:token
})
export const login_faliure = (error) =>({
	type:LOGIN_FALIURE,
	payload:error
})

