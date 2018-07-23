import React from 'react';
import isAuthenticated from '../isAuthenticated';
import Layout from '../components/Layout';
import firebase from '../firebase';


class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: {
        name: '',
        nit: '',
        products: [],
      },
      products: [],
    };
  }

  setProductId = ({ target }) => {
    this.setState({
      currentProductId: target.value,
    });
  }

  addProduct = (product) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        invoice: {
          ...prevState.invoice,
          products: [...prevState.invoice.products, product]
        }
      };
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

  updateInvoice = ({ target }) => {
    this.setState({
      ...this.state,
      invoice: {
        ...this.state.invoice,
        [target.name] : target.value,
      }
    });
  }

  render() {
    console.log(this.state);
    const { products } = this.state;
    return (
      <Layout>
        <h2>Nueva Compra</h2>
        <div className='form-group'>
          <label>Nombre comprador:</label>
          <input type='text' className='form-control' name='name'  onChange={this.updateInvoice}/>
        </div>
        <div className='form-group'>
          <label>NIT:</label>
          <input type='text' className='form-control' name='nit' onChange={this.updateInvoice} />
        </div>
        <table className='table table-borderd'>
          <thead>
            <th>Nombre</th>
            <th>Precio</th>
            <td>Acciones</td>
          </thead>
          <tbody>
            {this.state.products.map(product => 
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button className='btn btn-success' onClick={() => this.addProduct(product) }>
                Agregar
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </Layout>
    );
  }
}

export default isAuthenticated(Invoice);