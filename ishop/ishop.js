var ListOfProducts = React.createClass({


  displayName: 'ListOfProducts',

  getDefaultProps: function () {
    return { shop: " " }
  },

  render: function () {
    var product = this.props.products;
    var productsCode = product.map(function (v, i) {
      if (i == 0)
        return React.DOM.thead({ key: v.code, className: 'Product' + v.code },
          React.DOM.td({ className: 'Name' }, v.name),
          React.DOM.td({ className: 'Url' }, v.url),
          React.DOM.td({ className: 'Price' }, v.price),
          React.DOM.td({ className: 'Amount' }, v.amount),
        );
      else return React.DOM.tr({ key: v.code, className: 'Product' + v.code },
        React.DOM.td({ className: 'Name' }, v.name),
        React.DOM.td({ className: 'Url' }, v.url),
        React.DOM.td({ className: 'Price' }, v.price),
        React.DOM.td({ className: 'Amount' }, v.amount),
      )
    });
    return React.DOM.div({ className: 'ListOfProducts' },
      React.DOM.div({ className: 'Shop' }, this.props.shop),
      React.DOM.table({ className: 'Products' }, productsCode),
    );
  },
});