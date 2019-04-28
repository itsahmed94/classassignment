//App.js in src dir is using the Login Form and Header to set up the main UI for index.js at root for the App
import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
//import { Header } from "./components/common/Header";

import { Header } from "./common/";
// Import our LoginForm component to be displayed on the screen
//import LoginForm from "./components/LoginForm";

import LoginForm from "./LoginForm";

class App extends Component {
    //Life Cycle Method to init the firebase
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDjqsPb7_HQTQktq6xl-fDGiCVBF2dPUQY",
            authDomain: "mapp-auth-class-ahmed.firebaseapp.com",
            databaseURL: "https://mapp-auth-class-ahmed.firebaseio.com",
            projectId: "mapp-auth-class-ahmed",
            storageBucket: "mapp-auth-class-ahmed.appspot.com",
            messagingSenderId: "407294186543"
        });
    }


render() {
    return (
        <View>
            <Header headerText="Authentication" />
            <LoginForm />
        </View>
    );
}

}

export default App ;