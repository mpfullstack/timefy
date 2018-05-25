/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T22:09:32+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T22:22:50+02:00
 */


import { select, all, takeLatest, put, call, fork } from 'redux-saga/effects';
import globalActions from './globalActions';

const clients = [
  {
    "id": 1,
    "name": "Whads Accent SL"
  },
  {
    "id": 2,
    "name": "Cocuyo Labs"
  },
  {
    "id": 3,
    "name": "SERHS Tourism"
  }
];

export function* onRequestItems() {
  yield takeLatest(globalActions.REQUEST_ITEMS, function*({ itemType }) {
    yield put({
      type: globalActions.REQUEST_ITEMS_SUCCESS,
      items: clients
    });
  });
}

export default function* globalSagas() {
  yield all([
    fork(onRequestItems)
  ])
};
