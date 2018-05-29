/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-01-23T12:12:18+01:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-29T17:43:03+02:00
 */

import SuperFetch from './superFetch';
import { apiUrl } from '../config';

const getClients = async params => await SuperFetch.get(apiUrl.getClients);

const getProjects = async params => await SuperFetch.get(apiUrl.getProjects);

const getTasks = async params => await SuperFetch.get(apiUrl.getTasks);

export {
  getClients,
  getProjects,
  getTasks
}
