/*
* @Author: nshah
* @Date:   2017-09-15 01:18:29
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-16 10:55:39
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Text } from '@shoutem/ui';
import { login } from '../actions';

class LoginButton extends Component {
    onLogin = () => {
        this.props.dispatch(login());
    }

    render() {
        return (
            <Button styleName="light" onPress={this.onLogin}>
                <Text>Start chatting</Text>
            </Button>
        )
    }
}

export default connect()(LoginButton);