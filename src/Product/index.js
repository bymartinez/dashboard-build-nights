import React from 'react';
import isAuthenticated from '../isAuthenticated';
import Layout from '../components/Layout';
import ProductRow from './ProductRow';
import firebase from 'firebase';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      price: 0,
      products: [],
    };
  }

  onChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  componentDidMount() {
    firebase.database().ref().child('products').on('value', (snap) => {
      if(snap.val()) {
        const ids = Object.keys(snap.val());
        const products = ids.map((id) => {
            return {
              ...snap.val()[id],
              id,
            };
        });
        this.setState({
          products
        });
      }
    });
  }

  saveProduct = () => {
    const { name, price } = this.state;
    firebase.database().ref().child('products').push({
      name,
      price
    }).then(() => {
      alert('El producto se ha guardado correctamente!');
      this.setState({
        name: '',
        price: 0,
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Layout>
        <h2>Productos</h2>
        <table className='table'>
          <thead>
            <th>#ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <input type="text" className='form-control' placeholder='Nombre' onChange={this.onChange} name='name'/>
              </td>
              <td>
                <input type="text" className='form-control' placeholder='Precio' onChange={this.onChange} name='price' />
              </td>
              <td>
                <button className='btn btn-info' onClick={this.saveProduct}>Guardar</button>
              </td>
            </tr>
            {products.map(({ id,name,price }) => <ProductRow id={id} name={name} price={price} /> )}
          </tbody>
        </table>
      </Layout>
    );
  }
}

export default isAuthenticated(Product);