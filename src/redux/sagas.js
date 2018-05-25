/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2017-12-19T14:37:27+01:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T22:21:10+02:00
 */



import { all } from 'redux-saga/effects';
import globalSagas from './globalSagas';

export default function* rootSaga(getState) {
  yield all([
    globalSagas()
  ]);
}
