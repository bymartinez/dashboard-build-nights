import React from 'react';
import firebase from './firebase';
import Login from './Auth/Login';

/**
 * HOC (High Order Component) to verify if the user is authenticated
 * if the user i'snt authenticated return to login page
 * @param {Object} Component 
 */
const isAuthenticated = (Component) => {
  class ProtectedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: false,
        user: {},
      };
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            isAuthenticated: true,
            user: user,
          });
        } else {
          this.setState({
            isAuthenticated: false,
            user: user,
          });
        }
      });
    }

    render() {
      const { isAuthenticated, user } = this.state;
      if (isAuthenticated) {
        return <Component isAuthenticated={isAuthenticated} user={user} />
      };
      return <Login />;
    }
  }

  return ProtectedComponent;
};

export default isAuthenticated;