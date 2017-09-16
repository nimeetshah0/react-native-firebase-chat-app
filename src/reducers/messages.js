/*
* @Author: nshah
* @Date:   2017-09-14 23:48:14
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-15 02:57:19
*/


const message = (state, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {
				key: action.key,
				text: action.text,
				time: action.time,
				author: action.author
			}
		default: 
			return state;
	}
}


const messages = (state=[], action) => {
	switch (action.type) {
		case 'ADD_MESSAGE': 
			if (state.map(m => m.key).includes(action.key)) {
				return state;
			} else {
				return [
					...state,
					message(undefined, action)
				]
			}
		case 'SEND_MESSAGE':
			return [
				...state,
				message(undefined, action)
			]
		default: 
			return state;
	}
};

export default messages;