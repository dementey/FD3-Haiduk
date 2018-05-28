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


  render: function () {

    var product = this.props.products;

    var title = this.props.title;

    var productsCode = React.DOM.table({ className: 'ProductTable' },
      React.DOM.thead({ key: title.code, className: 'Title' },
        React.DOM.tr(null,
          React.DOM.td(null, title.name),
          React.DOM.td(null, title.url),
          React.DOM.td(null, title.price),
          React.DOM.td(null, title.amount), ), ),
      React.DOM.tbody({ className: 'Products' },
        product.map(function (v, i) {
          return React.DOM.tr({ key: v.code, className: 'Product' + v.code },
            React.DOM.td(null, v.name),
            React.DOM.td(null, React.DOM.a({ href: v.url }, 'сcылка на фото')),
            React.DOM.td(null, v.price),
            React.DOM.td(null, v.amount),
          )
        })
      )
    );

    return React.DOM.div(null,
      React.DOM.div({ className: 'Shop' }, this.props.shop),
      React.DOM.div(null, productsCode),
    );

  },



});