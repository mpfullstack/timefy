/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2017-12-21T20:13:28+01:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-25T21:05:41+02:00
 */



const actions = {
    REQUESTS_ITEMS: 'REQUESTS_ITEMS',
    REQUESTS_ITEMS_SUCCESS: 'REQUESTS_ITEMS_SUCCESS',
    REQUEST_ITEMS_ERROR: 'REQUEST_ITEMS_ERROR',
    requestItems: ({itemType}) => ({
        type: actions.REQUESTS_ITEMS,
        itemType
    })
};
export default actions;
