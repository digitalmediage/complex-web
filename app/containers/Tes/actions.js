/*
 *
 * Tes actions
 *
 */

import { Get_COMPLEX, Complex_succ } from './constants';

export function Get_COMPLEXS() {
  return {
    type: Get_COMPLEX,
  };
}

  export function complexAcc(complex) {
  return {
    type: Complex_succ,
    complex,
  };
}
