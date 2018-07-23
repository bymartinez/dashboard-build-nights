import React from 'react';
import {
  Link
} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li class="nav-item">
              <Link to='/products'>
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>Productos
                </a>
              </Link>
              <Link to='/invoice'>
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>Compras
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;