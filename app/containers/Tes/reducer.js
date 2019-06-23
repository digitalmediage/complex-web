/*
 *
 * Tes reducer
 *
 */
import produce from 'immer';
import { Get_COMPLEX, Complex_succ } from './constants';

export const initialState = {
  complex: [],
};

/* eslint-disable default-case, no-param-reassign */
const tesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case Get_COMPLEX:
      draft.loading = true;
      draft.error = false;
      case Complex_succ:
      draft.loading = false;
      draft.complex = action.complex;
        break;
    }
  });

export default tesReducer;
