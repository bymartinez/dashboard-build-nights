import React from 'react';
import firebase from 'firebase';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <span>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">My Dashboard</a>
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#" onClick={this.logout}>Sign out</a>
            </li>
          </ul>
        </nav>
      </span>
    );
  }
}

export default Header;