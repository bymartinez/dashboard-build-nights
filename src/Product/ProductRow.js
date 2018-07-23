import React from 'react';
import firebase from '../firebase';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      price: 0,
    };
  }

  componentDidMount() {
    const { id,name,price } = this.props;
    this.setState({
      id,
      name,
      price,
    });
  }

  onChange = ({ target }) => {
    this.setState({
      [target.name]: [target.value]
    });
  };

  updateProduct = () => {
    const { id } = this.props;
    const { name,price } = this.state;
    firebase.database().ref().child(`products/${id}`).set({
      name,
      price
    }).then(() => {
      alert('El producto se ha actualizado correctamente!');
    });;
  };

  deleteProduct = () => {
    const { id } = this.props;
    firebase.database().ref().child(`products/${id}`).remove().then(() => {
      alert('el producto se ha eliminado correctamente!');
    });
  };

  render() {
    const { name, price } = this.state;

    return (
      <tr>
        <td colSpan="2">
          <input type="text" className='form-control' placeholder='Nombre' value={name} name='name' onChange={this.onChange}/>
        </td>
        <td>
          <input type="text" className='form-control' placeholder='Precio' value={price} name='price' onChange={this.onChange}/>
        </td>
        <td>
          <button className='btn btn-info' onClick={this.updateProduct}>Actualizar</button>
          <button className='btn btn-danger' onClick={this.deleteProduct}>Eliminar</button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;