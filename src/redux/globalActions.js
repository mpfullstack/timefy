/**
 * @Author: Marc Pérez Castells <welvi>
 * @Date:   2017-12-21T20:13:28+01:00
 * @Email:  info@marcperez.cat
 * @Last modified by:   welvi
 * @Last modified time: 2018-05-27T17:37:31+02:00
 */



const actions = {
    REQUEST_ITEMS: 'REQUEST_ITEMS',
    REQUEST_ITEMS_SUCCESS: 'REQUEST_ITEMS_SUCCESS',
    REQUEST_ITEMS_ERROR: 'REQUEST_ITEMS_ERROR',
    requestItems: itemType => ({
        type: actions.REQUEST_ITEMS,
        itemType
    })
};
export default actions;
