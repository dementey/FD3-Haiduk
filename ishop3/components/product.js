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
        cbIsSelectFunc: PropTypes.func.isRequired,// callBack функция при вызове которой мы передаем в родительский модуль выбранный товар
        isClicked: PropTypes.bool.isRequired,
        cbIsCard: PropTypes.func.isRequired,
    };

    isSelected = (EO) => {
        this.props.cbIsSelectFunc(this.props, false);
        if (!this.props.isClicked) this.props.cbIsCard(this.props, false);
    }

    isEdit = (EO) => {
        if (this.props.isClicked) this.props.cbIsCard(this.props, true);
    };

    render() {
        return (
            <tr className={this.props.isClicked ? this.props.num + ' selected' : this.props.num} onClick={this.isSelected}>
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