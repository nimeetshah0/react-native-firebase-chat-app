/*
* @Author: nshah
* @Date:   2017-09-14 23:41:02
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-15 02:07:03
*/

import { combineReducers } from 'redux';

import chatroom from './chatroom';
import user from './user';

const rootReducer = combineReducers({
	chatroom,
	user
});


export default rootReducer;