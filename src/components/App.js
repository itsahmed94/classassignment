import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import {
Header,
CustomButton,
CardSection,
Card,
Spinner
} from "./common";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./LoginForm";

class App extends Component {
state = { loggedIn: null };
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
    apiKey: "AIzaSyDjqsPb7_HQTQktq6xl-fDGiCVBF2dPUQY",
    authDomain: "mapp-auth-class-ahmed.firebaseapp.com",
    databaseURL: "https://mapp-auth-class-ahmed.firebaseio.com",
    projectId: "mapp-auth-class-ahmed",
    storageBucket: "mapp-auth-class-ahmed.appspot.com",
    messagingSenderId: "407294186543"
});

//Handle the Application when it's logged in or logged out
firebase.auth().onAuthStateChanged(user => {
if (user) {
this.setState({ loggedIn: true });
} else {
this.setState({ loggedIn: false });
}
});
}

renderContent() {
switch (this.state.loggedIn) {
case true:
return (
<Card>
<CardSection>
<CustomButton onPress={() => firebase.auth().signOut()}>
Logout
</CustomButton>
</CardSection>
</Card>
);
case false:
return <LoginForm />;
default:
return <Spinner size="large" />;
}
}
render() {
return (
<View>
<Header headerText="Authentication" />
{this.renderContent()}
{/* 
Before the renderContent Handling
<LoginForm /> */}
</View>
);
}
}

export default App;
