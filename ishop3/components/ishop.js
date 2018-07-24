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
    isSelected: '',
    curentCard: '',
    currentButtonEditClicked: false,
    productsState: this.props.products,
    newProduct: false,
  };

  isSelectFunc = (curProd, del) => {


    if (del) {
      if (confirm('Вы желаете удалить товар?')) {
        let arr = this.state.productsState;
        delete arr[curProd.num - 1];
        this.setState({ isSelected: false });
        this.setState({ productsState: arr });

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
    //console.log(isButtonEditClicked);
    this.setState({ currentButtonEditClicked: isButtonEditClicked });
  };

  cbCard = (a1, a2, a3) => {
    let aaa = this.state.productsState;
    aaa[a1.code - 1] = a1;
    this.setState({ productsState: aaa });
    this.setState({ isSelected: a2 });
    this.setState({ newProduct: a3 });
  };


  isNew = (EO) => {
    this.setState(() => { return { newProduct: true }; });
    this.setState({currentButtonEditClicked:true});
};

  render() {
console.log(this.props.products.length);
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
                newProduct={this.state.newProduct}              />
            )}
          </tbody>
        </table>
         <button className="newButton" onClick={this.isNew}>Новый товар</button> 

        {this.state.isSelected||this.state.newProduct ?
          <Card className='card' key={10 + this.state.isSelected}
            curentCard={this.state.curentCard}
            currentButtonEditClicked={this.state.currentButtonEditClicked}
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