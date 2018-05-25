/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T20:13:18+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T21:28:10+02:00
 */



import { Map } from 'immutable';
import globalActions from '../globalActions';

const initState = new Map({
  items: []
});

const items = [
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

export default function clientsReducer(state = initState, action) {
  switch (action.type) {
    case globalActions.REQUESTS_ITEMS:
      return state
        .set('clients', items);
    default:
      return state;

  }
}
