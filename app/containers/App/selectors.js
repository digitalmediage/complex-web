import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

const makeSelectNotification = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.notification,
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectComplexes = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.complexes,
  );

const makeSelectProperties = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.properties,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.error,
  );

const makeSelectUserEmail = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.email,
  );

const makeSelectUserPassword = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.password,
  );

const makeSelectresponseStatus = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.responseStatus,
  );

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.user,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectNews = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.news,
  );

export {
  makeSelectNotification,
  makeSelectNews,
  makeSelectLocation,
  makeSelectUser,
  makeSelectresponseStatus,
  makeSelectComplexes,
  makeSelectCurrentUser,
  makeSelectProperties,
  makeSelectUserEmail,
  makeSelectUserPassword,
  makeSelectLoading,
  makeSelectError,
};
