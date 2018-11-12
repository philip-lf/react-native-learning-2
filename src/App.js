import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import firebaseAuth from '../secret';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseAuth);
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <Text>An App</Text>
            </View>
        )
    }
}

export default App;