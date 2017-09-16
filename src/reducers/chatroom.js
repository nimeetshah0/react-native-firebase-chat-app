/*
* @Author: nshah
* @Date:   2017-09-14 23:43:01
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-15 02:06:50
*/


import { combineReducers } from 'redux';

import messages from './messages';

const initialState = {
	isFetching: false,
	lastFetched: null,
	height: 0
}

const meta = (state = initialState, action) => {
	switch (action.type) {
		case 'START_FETCHING_MESSAGES':
			return Object.assign({}, state, {
				ifFetching: true
			});
		case 'RECEIVED MESSAGES':
			return Object.assign({}, state, {
				lastFetched: action.receivedAt,
				isFetching: false
			});
		case 'UPDATE_MESSAGES_HEIGHT':
			return Object.assign({}, state, {
				height: action.height
			});
		default:
			return state;
	}
}

const chatroom = combineReducers({
	messages,
	meta
});

export default chatroom;