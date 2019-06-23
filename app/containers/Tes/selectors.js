import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tes state domain
 */

// const selectTesDomain = state => state.tes || initialState;

const selectComplex = state => state.complex || initialState;
/**
 * Other specific selectors
 */

/**
 * Default selector used by Tes
 */

const makeSelectComplex = () =>
  createSelector(
    selectComplex,
    homeState => homeState.complex,
  );



// export default makeSelectTes;
export {selectComplex, makeSelectComplex };
