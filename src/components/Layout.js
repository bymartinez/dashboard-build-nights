import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <Header />
            <Navbar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              {children}
            </main>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Layout;