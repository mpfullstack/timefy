/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T20:13:18+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T22:24:10+02:00
 */



import { Map } from 'immutable';
import globalActions from '../globalActions';

const initState = new Map({
  items: []
});

export default function clientsReducer(state = initState, action) {
  switch (action.type) {
    case globalActions.REQUEST_ITEMS_SUCCESS:
      return state
        .set('items', action.items);
    default:
      return state;

  }
}
