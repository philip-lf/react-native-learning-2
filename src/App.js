import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import firebaseAuth from '../secret';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseAuth);
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        )
    }
}

export default App;