import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';

import Product from './product';
import Card from './card';

class ListOfProducts extends React.Component {

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
  //props shop

  state = {
    isSelected: '',
    curentCard: '',
  };

  isSelectFunc = (cb) => {
    this.setState({ isSelected: cb });
  };

  isNew = (EO) => {
    EO.stopPropagation();
    console.log(EO.currentTarget.className);
  };

  isCard = (hash) => {
    this.setState({ curentCard: hash });
  };

  render() {
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
            {this.props.products.map(v =>
              <Product key={v.code}
                num={v.code}
                name={v.name}
                price={v.price}
                url={v.url}
                amount={v.amount}
                cbIsSelectFunc={this.isSelectFunc}
                cbIsSelected={this.state.isSelected == v.code ? true : false}
                cbIsCard={this.isCard}
                cbIsSelected2={this.state.isSelected == v.code ? v.code : null}
              />
            )}
          </tbody>
        </table>
        <button className="newButton" onClick={this.isNew}  >Новый товар</button>
        {this.state.isSelected ?
          <Card className='card'
            name={this.state.curentCard.name}
            price={this.state.curentCard.price}
            url={this.state.curentCard.url}
            amount={this.state.curentCard.amount}
          /> : null
        }
      </div>

    );
  }
}

export default ListOfProducts;