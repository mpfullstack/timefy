/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2018-02-20T16:40:49+01:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-29T17:43:54+02:00
 */

const baseUrl = 'http://localhost:3001/';
const baseAPIUrl = `${baseUrl}api`;
const clientsUrl = `${baseAPIUrl}/clients`;
const projectsUrl = `${baseAPIUrl}/projects`;
const tasksUrl = `${baseAPIUrl}/tasks`;

const apiUrl = {
  getClients: clientsUrl,
  getProjects: projectsUrl,
  getTasks: tasksUrl
};

export {
  apiUrl
};
