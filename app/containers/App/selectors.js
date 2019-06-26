import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

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
    homeState => homeState.error,
  );

const makeSelectUserPassword = () =>
  createSelector(
    selectGlobal,
    homeState => homeState.error,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  makeSelectLocation,
  makeSelectComplexes,
  makeSelectCurrentUser,
  makeSelectProperties,
  makeSelectUserEmail,
  makeSelectUserPassword,
  makeSelectLoading,
  makeSelectError,
};
