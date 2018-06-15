var ListOfProducts = React.createClass({

  displayName: 'ListOfProducts',

  propTypes: {
    products: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        amount: React.PropTypes.number.isRequired,
      })
    ),
    title: React.PropTypes.shape({
      code: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      price: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      amount: React.PropTypes.string.isRequired,
    })

  },

  getInitialState: function () {
    return {
      isSelected: '',
    }
  },

  isSelectFunc: function (cb) {
    console.log(cb);
    this.setState({ isSelected: cb }, );
  },

  render: function () {

    var productsCode = React.DOM.table({ className: 'ProductTable', },
      React.DOM.thead({ key: this.props.title.code, className: 'Title' },
        React.DOM.tr(null,
          React.DOM.td(null, this.props.title.name),
          React.DOM.td(null, this.props.title.url),
          React.DOM.td(null, this.props.title.price),
          React.DOM.td(null, this.props.title.amount), ), ),
      React.DOM.tbody({ className: 'Products', },
        this.props.products.map(v =>
          React.createElement(product, {
            key: v.code,
            num: v.code, name: v.name, price: v.price, url: v.url, amount: v.amount,
            cbIsSelectFunc: this.isSelectFunc,
            cbIsSelected: this.state.isSelected == v.code ? true : false,
          })
        ),
      )
    );

    return React.DOM.div(null,
      React.DOM.div({ className: 'Shop' }, this.props.shop),
      React.DOM.div(null, productsCode),
    );

  },



});