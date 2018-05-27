/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T22:09:32+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-27T17:41:07+02:00
 */


import { all, takeLatest, put, call, fork } from 'redux-saga/effects';
import globalActions from './globalActions';
import { getClients } from '../helpers/api';

export function* onRequestItems() {
  yield takeLatest(globalActions.REQUEST_ITEMS, function*({ itemType }) {
    let fetchItems;
    if( itemType === 'clients' ) {
      fetchItems = getClients;
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
