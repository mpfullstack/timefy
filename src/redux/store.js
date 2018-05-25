/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2017-12-19T14:37:27+01:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T20:23:47+02:00
 */



import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
// import rootSaga from '../redux/sagas';

import { composeWithDevTools } from 'redux-devtools-extension';

const history = createHistory();
// const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, /*sagaMiddleware,*/ routeMiddleware];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);
// sagaMiddleware.run(rootSaga);
export { store, history };
