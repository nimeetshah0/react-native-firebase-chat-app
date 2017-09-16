/*
* @Author: nshah
* @Date:   2017-09-15 01:25:08
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-15 02:14:34
*/

import React, { Component } from 'react';

import FCM, { FCMEvent, NotificationType } from 'react-native-fcm';

import App from './src/App.js';

export default class ChatApp extends Component {
    render() {
        return (
            <App />
        );
    }
}