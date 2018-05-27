/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-25T20:13:18+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-27T17:21:23+02:00
 */



import { Map } from 'immutable';
import globalActions from '../globalActions';

const initState = new Map({
  clients: []
});

export default function clientsReducer(state = initState, action) {
  switch (action.type) {
    case globalActions.REQUEST_ITEMS_SUCCESS:
      return state
        .set('clients', action.items);
    default:
      return state;
  }
}
