import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tes state domain
 */

// const selectTesDomain = state => state.tes || initialState;

const selectComplexes = state => state.complexes || initialState;
/**
 * Other specific selectors
 */

/**
 * Default selector used by Tes
 */

const makeSelectComplexes = () =>
  createSelector(
    selectComplexes,
    homeState => homeState.complexes,
  );

// export default makeSelectTes;
export { selectComplexes, makeSelectComplexes };
