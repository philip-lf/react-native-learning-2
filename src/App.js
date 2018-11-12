import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAd839uMpDUlmyPn0ddkVzO5nX5D_OuIRE",
            authDomain: "authentication-eab28.firebaseapp.com",
            databaseURL: "https://authentication-eab28.firebaseio.com",
            projectId: "authentication-eab28",
            storageBucket: "authentication-eab28.appspot.com",
            messagingSenderId: "734338637057"
        });
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