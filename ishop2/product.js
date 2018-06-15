var product = React.createClass({

    displayName: 'Product',

    propTypes: {
        num: React.PropTypes.number,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        amount: React.PropTypes.number.isRequired,
        cbIsSelectFunc: React.PropTypes.func.isRequired,
        cbIsSelected: React.PropTypes.bool.isRequired,
    },
    isSelected: function (EO) {
        EO.stopPropagation();
        this.props.cbIsSelectFunc(EO.currentTarget.className);
    },
    render: function () {
        return React.DOM.tr({ className: this.props.cbIsSelected ? this.props.num + ' selected' : this.props.num, onClick: this.isSelected, },
            React.DOM.td(null, this.props.name),
            React.DOM.td(null, React.DOM.a({ href: this.props.url }, 'сcылка на фото')),
            React.DOM.td(null, this.props.price),
            React.DOM.td(null, this.props.amount, ),
        )
    }
});