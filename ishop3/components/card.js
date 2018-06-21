
import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';

class Card extends React.Component {

    static propTypes = {
        num: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        cbIsSelectFunc: PropTypes.func.isRequired,
        cbIsSelected: PropTypes.bool.isRequired,
    };
    isSelected = (EO) => {
        EO.stopPropagation();
        this.props.cbIsSelectFunc(EO.currentTarget.className);
    };

    render() {
        return (
            <table className='ProductTable'>
                <tr>
                    <td>{this.props.name}</td>
                    <td> <a href={this.props.url}> сcылка на фото</a></td>
                    <td> {this.props.price}</td>
                    <td>{this.props.amount}</td>
                </tr>
            </table>)
    };
};

export default Card;