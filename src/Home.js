import React from 'react';
import isAuthenticated from './isAuthenticated';
import Layout from './components/Layout';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Hola</h2>
      </Layout>
    );
  }
}

export default isAuthenticated(Home);