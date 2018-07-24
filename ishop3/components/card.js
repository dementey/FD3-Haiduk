
import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';
import { validateText, validateUrl, validateNumber } from "./validate";

class Card extends React.Component {

    static propTypes = {
        curentCard:
            PropTypes.shape({
                num: PropTypes.number,
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                amount: PropTypes.number.isRequired,
            }),
        currentButtonEditClicked: PropTypes.bool.isRequired,
        cbCard: PropTypes.func.isRequired,
        newProduct: PropTypes.bool.isRequired,
        allProducts:PropTypes.number.isRequired,
    };


    state = {
        editNum: this.props.curentCard.num,
        editName: this.props.curentCard.name,
        editUrl: this.props.curentCard.url,
        editPrice: this.props.curentCard.price,
        editAmount: this.props.curentCard.amount,
        editNumValidate: true,
        editUrlValidate: true,
        editPriceValidate: true,
        editAmountValidate: true,
        newProductState: false,
    };


    isEdit = (EO) => {
        if (EO.currentTarget.className == 'editName') {
            this.setState({ editName: EO.currentTarget.value });
            this.setState({ editNumValidate: validateText(EO.currentTarget.value) });
        }
        else if (EO.currentTarget.className == 'editUrl') {
            this.setState({ editUrl: EO.currentTarget.value });
            this.setState({ editUrlValidate: validateUrl(EO.currentTarget.value) });
        }
        else if (EO.currentTarget.className == 'editPrice') {
            this.setState({ editPrice: EO.currentTarget.value });
            this.setState({ editPriceValidate: validateNumber(Number(EO.currentTarget.value)) });
        }
        else if (EO.currentTarget.className == 'editAmount') {
            this.setState({ editAmount: EO.currentTarget.value });
            this.setState({ editAmountValidate: validateNumber(Number(EO.currentTarget.value)) });
        }

    };

    isSave = (EO) => {
        if (this.state.editNumValidate && this.state.editUrlValidate && this.state.editPriceValidate && this.state.editAmountValidate)
            this.props.cbCard({ "code": this.state.editNum, "name": this.state.editName, "url": this.state.editUrl, "price": Number(this.state.editPrice), "amount": Number(this.state.editAmount) }, false);
    };
    isСancel = (EO) => {
        this.props.cbCard({ "code": this.props.editNum, "name": this.props.editName, "url": this.props.editUrl, "price": Number(this.props.editPrice), "amount": Number(this.props.editAmount) }, false);
    };


    isNew = (EO) => {
        this.setState(() => { return { newProductState: true }; });
        this.props.cbCard({ "code": this.props.editNum, "name": this.props.editName, "url": this.props.editUrl, "price": Number(this.props.editPrice), "amount": Number(this.props.editAmount) }, true, true);
    };

isAdd=(EO)=>{
    this.props.cbCard({ "code": this.props.allProducts+1, "name": this.props.editName, "url": this.props.editUrl, "price": Number(this.props.editPrice), "amount": Number(this.props.editAmount) }, false);
};

    render() {
        console.log(this.props.newProduct);
        console.log(this.props.allProducts);
        return (


            <table className='cardTable'>
                <tbody>
                    <thead> <button className="newButton" onClick={this.isNew}>Новый товар</button></thead>
                    <tr>
                        <td>
                            <input type='text' className='editName' defaultValue={!(this.props.newProduct) ? this.props.curentCard.name : 0} disabled={!this.props.currentButtonEditClicked} onChange={this.isEdit} />
                            {(!this.state.editNumValidate) && <div className='warning'>Повторите попытку ввода на русском языке</div>}
                        </td>
                        <td>
                            <input type='text' className='editUrl' defaultValue={(!this.props.newProduct) ? this.props.curentCard.url : 0} disabled={!this.props.currentButtonEditClicked} onChange={this.isEdit} />
                            {(!this.state.editUrlValidate) && <div className='warning'>Введите пожалуйста URL в формате https://www.ваш_сайт.домен/</div>}
                        </td>
                        <td>{
                            <input type='text' className='editPrice' defaultValue={(!this.props.newProduct) ? this.props.curentCard.price : 0} disabled={!this.props.currentButtonEditClicked} onChange={this.isEdit} />}
                            {(!this.state.editPriceValidate) && <div className='warning'>Вы ввели не число, повторите попытку ввода</div>}
                        </td>
                        <td>{
                            <input type='text' className='editAmount' defaultValue={(!this.props.newProduct) ? this.props.curentCard.amount : 0} disabled={!this.props.currentButtonEditClicked} onChange={this.isEdit} />}
                            {(!this.state.editAmountValidate) && <div className='warning'>Вы ввели не число, повторите попытку ввода</div>}
                        </td>

                        {(this.props.currentButtonEditClicked) &&
                            <td>
                                <button className="saveButton" onClick={this.isSave}>Cохранить</button>
                                &nbsp;
                                <button className="cancelButton" onClick={this.isСancel}>Отмена</button>
                            </td>}

                        {(this.props.newProduct) &&
                            <td>
                                <button className="saveButton" onClick={this.isAdd}>добавить</button>
                                &nbsp;
                                <button className="cancelButton" onClick={this.isСancel}>Отмена</button>
                            </td>}


                    </tr>

                </tbody>

            </table>)
    };
};

export default Card;