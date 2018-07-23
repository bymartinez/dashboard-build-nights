import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(user => {
      console.log(user);
    });
  }

  render() {
    return (
      <h1 onClick={this.loginWithGoogle}>Login</h1>
    );
  }
}

export default Login;