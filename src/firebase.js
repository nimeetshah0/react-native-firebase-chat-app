/*
* @Author: nshah
* @Date:   2017-09-14 23:37:12
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-14 23:38:12
*/


import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyA5q8n-ehUbLp81NRltnx0ZZh4CcvVRfuI",
    authDomain: "chatapp-a720d.firebaseapp.com",
    databaseURL: "https://chatapp-a720d.firebaseio.com",
    projectId: "chatapp-a720d",
    storageBucket: "chatapp-a720d.appspot.com",
    messagingSenderId: "329516340600"
};

firebase.initializeApp(config);

export default firebase;