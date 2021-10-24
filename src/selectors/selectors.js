import { createSelector } from 'reselect';

const rootReducer = (state) => state.rootReducer;

console.log(rootReducer.users)

export const selectUsersData = () => createSelector(rootReducer, (state) => (state.get('users'))?state.get('users').toJS():state.get('users'));
export const selectUserToken = () => createSelector(rootReducer, (state) => (state.get('token'))?state.get('token').toJS():state.get('token'));