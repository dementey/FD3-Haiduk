import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';

class Product extends React.Component {

    static propTypes = {
        num: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        cbIsSelectFunc: PropTypes.func.isRequired,
        cbIsSelected: PropTypes.bool.isRequired,
        cbIsCard: PropTypes.func.isRequired,
    };

    isSelected = (EO) => {
        EO.stopPropagation();
        this.props.cbIsSelectFunc(EO.currentTarget.className);
        this.props.cbIsCard(this.props);
    }

    isEdit = (EO) => {
        EO.stopPropagation();
        console.log(EO.currentTarget.className);
    };

    isDelete = (EO) => {
        EO.stopPropagation();
        console.log(EO.currentTarget.className);
    };

    render() {
        return (
            <tr className={this.props.cbIsSelected ? this.props.num + ' selected' : this.props.num} onClick={this.isSelected}>
                <td>{this.props.name}</td>
                <td><a href={this.props.url}> сcылка на фото</a></td>
                <td> {this.props.price}</td>
                <td>{this.props.amount}</td>
                <td>
                    <button className="editButton" onClick={this.isEdit}>Редактировать</button>
                    &nbsp;
                    <button className="deleteButton" onClick={this.isDelete}> Удалить</button>
                </td>
            </tr>
        )
    };
};

export default Product;