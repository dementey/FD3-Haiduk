import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';

import Product from './product';
import Card from './card';

class IShop extends React.Component {

  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      })
    ),
    title: PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  };

  state = {
    isSelected: false,
    curentCard: '',
    disableEnableValue: false,
    productsState: this.props.products,
    newProduct: false,
  };

  isSelectFunc = (curProd, del) => {


    if (del) {
      if (confirm('Вы желаете удалить товар?')) {
        let arr = this.state.productsState;
        delete arr[curProd.num - 1];
        this.setState({ productsState: arr });
        this.setState({ isSelected: false });

      } else null;
    }
    else {
      this.setState({ isSelected: curProd.num });
      this.setState({ curentCard: curProd });
    };
  };

  isNew = (EO) => {
    EO.stopPropagation();
  };

  isCard = (hash, isButtonEditClicked = false) => {
    this.setState({ disableEnableValue: isButtonEditClicked });
  };

  cbCard = (editedProduct, unselectCard, addProduct) => {
    let aaa = this.state.productsState;
    if (!addProduct) {
      aaa[editedProduct.code - 1] = editedProduct;
    }
    else aaa.push(editedProduct);
    this.setState({ productsState: aaa });
    this.setState({ isSelected: unselectCard });
    this.setState({ newProduct: addProduct });
  };


  isNew = (EO) => {
    this.setState(() => { return { newProduct: true }; });
    this.setState({ disableEnableValue: true });
    this.setState({ curentCard: { code: this.props.products.length + 1, name: '', price: '', url: '', amount: '' } });
  };

  render() {

    console.log(this.state.isSelected + '/' + this.state.newProduct)
    return (
      <div>
        <div className='Shop'>{this.props.shop}</div>
        <table className='productTable'>
          <thead key={this.props.title.code} className='Title'>
            <tr>
              <td> {this.props.title.name}</td>
              <td> {this.props.title.url}</td>
              <td> {this.props.title.price}</td>
              <td>{this.props.title.amount}</td>
              <td>Редактирование</td>
            </tr>
          </thead>
          <tbody className='Products'>
            {this.state.productsState.map(v =>
              <Product key={v.code}
                num={v.code}
                name={v.name}
                price={v.price}
                url={v.url}
                amount={v.amount}
                cbIsSelectFunc={this.isSelectFunc}
                isClicked={this.state.isSelected == v.code ? true : false}
                cbIsCard={this.isCard}
                newProduct={this.state.newProduct} />
            )}
          </tbody>
        </table>
        <button className="newButton" onClick={this.isNew}>Новый товар</button>

        {this.state.isSelected || this.state.newProduct ?
          <Card className='card' key={100 + this.state.isSelected + this.state.newProduct && 10}
            curentCard={this.state.curentCard}
            disableEnableValue={this.state.disableEnableValue}
            cbCard={this.cbCard}
            newProduct={this.state.newProduct}
            allProducts={this.props.products.length}
          /> : null
        }

      </div>

    );
  }
}

export default IShop;