/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T22:09:32+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-29T17:43:31+02:00
 */


import { all, takeLatest, put, call, fork } from 'redux-saga/effects';
import globalActions from './globalActions';
import { getClients, getProjects, getTasks } from '../helpers/api';

export function* onRequestItems() {
  yield takeLatest(globalActions.REQUEST_ITEMS, function*({ itemType }) {
    let fetchItems;
    if( itemType === 'clients' ) {
      fetchItems = getClients;
    } else if( itemType === 'projects') {
      fetchItems = getProjects;
    } else if( itemType === 'tasks' ) {
      fetchItems = getTasks;
    }
    const result = yield call(fetchItems);
    yield put({
      type: globalActions.REQUEST_ITEMS_SUCCESS,
      items: result
    });
  });
}

export default function* globalSagas() {
  yield all([
    fork(onRequestItems)
  ])
};
