/**
 *
 * Asynchronously loads the component for Tes
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
