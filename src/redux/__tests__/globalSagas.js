/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-05-27T18:08:54+02:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-29T17:45:39+02:00
 */


// Try this module testing first
// http://redux-saga-test-plan.jeremyfairbank.com/integration-testing/mocking/static-providers.html

// Another testing module
// https://www.npmjs.com/package/redux-saga-tester

import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { getClients, getProjects, getTasks } from '../../helpers/api';
import { onRequestItems } from '../globalSagas';
import globalActions from '../globalActions';

it('Should fetch clients and put REQUEST_ITEMS_SUCCESS with result items', () => {
  const clients = [{ id: 1, name: 'Whads Accent SL' }];
  return expectSaga(onRequestItems)
    .provide([
      // Use the `call.fn` matcher from Redux Saga Test Plan
      [matchers.call.fn(getClients), clients],
    ])
    .put({
      type: 'REQUEST_ITEMS_SUCCESS',
      items: clients
    })
    .dispatch({
      type: globalActions.REQUEST_ITEMS,
      itemType: 'clients'
    })
    // no warning message will be printed
    // this is useful if you expect the saga to time out
    .silentRun();
});

it('Should fetch projects and put REQUEST_ITEMS_SUCCESS with result items', () => {
  const projects = [{"id": 1,"name": "SVIPLAM","client_id": 1}];
  return expectSaga(onRequestItems)
    .provide([
      // Use the `call.fn` matcher from Redux Saga Test Plan
      [matchers.call.fn(getProjects), projects]
    ])
    .put({
      type: 'REQUEST_ITEMS_SUCCESS',
      items: projects
    })
    .dispatch({
      type: globalActions.REQUEST_ITEMS,
      itemType: 'projects'
    })
    // no warning message will be printed
    // this is useful if you expect the saga to time out
    .silentRun();
});

it('Should fetch tasks and put REQUEST_ITEMS_SUCCESS with result items', () => {
  const tasks = [
    {
      "name": "Fix inspection reports",
      "description": "",
      "start_time": "",
      "end_time": "",
      "hours": "2",
      "minutes": "45",
      "project_id": 1
    }
  ];
  return expectSaga(onRequestItems)
    .provide([
      // Use the `call.fn` matcher from Redux Saga Test Plan
      [matchers.call.fn(getTasks), tasks]
    ])
    .put({
      type: 'REQUEST_ITEMS_SUCCESS',
      items: tasks
    })
    .dispatch({
      type: globalActions.REQUEST_ITEMS,
      itemType: 'tasks'
    })
    // no warning message will be printed
    // this is useful if you expect the saga to time out
    .silentRun();
});
