
import React from 'react';
import PropTypes from 'prop-types';

import './ishop.css';

class Card extends React.Component {

    static propTypes = {
        curentCard:
            PropTypes.shape({
                num: PropTypes.number,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
            }),
        currentButtonEditClicked: PropTypes.bool.isRequired,
        cbCard: PropTypes.func.isRequired,
    };


    state = {
        editNum: this.props.curentCard.num,
        editName: this.props.curentCard.name,
        editUrl: this.props.curentCard.url,
        editPrice: this.props.curentCard.price,
        editAmount: this.props.curentCard.amount,
    };


    isEdit = (EO) => {
        if (EO.currentTarget.className == 'editName') {
            this.setState({ editName: EO.currentTarget.value });
            console.log(this.state.editName);
        }
        else if (EO.currentTarget.className == 'editUrl') {
            this.setState({ editUrl: EO.currentTarget.value });
            console.log(this.state.editUrl);
        }
        else if (EO.currentTarget.className == 'editPrice') {
            this.setState({ editPrice: EO.currentTarget.value });
            console.log(this.state.editPrice);
        }
        else if (EO.currentTarget.className == 'editAmount') {
            this.setState({ editAmount: EO.currentTarget.value });
            console.log(this.state.editAmount);
        }

    };

    isSave = (EO) => {

        this.props.cbCard({"code": this.state.editNum, "name": this.state.editName,"price":this.state.editPrice,"url": this.state.editUrl,  "amount": this.state.editAmount});
    };


    render() {
        return (
            <table className='cardTable'>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' className='editName' defaultValue={this.props.curentCard.name} disabled={!this.props.currentButtonEditClicked} onChange={this.isEdit} />
                        </td>
                        <td><a href={this.props.url}> сcылка на фото</a>
                            {<input type='text' className='editUrl' defaultValue={this.props.curentCard.url} disabled={!this.props.currentButtonEditClicked} onChange={this.isEdit} />}
                        </td>
                        <td>{
                            <input type='text' className='editPrice' defaultValue={this.props.curentCard.price} disabled={!this.props.currentButtonEditClicked} onChange={this.isEdit} />}
                        </td>
                        <td>{
                            <input type='text' className='editAmount' defaultValue={this.props.curentCard.amount} disabled={!this.props.currentButtonEditClicked} onChange={this.isEdit} />}
                        </td>

                        {(this.props.currentButtonEditClicked) &&
                            <td>
                                <button className="saveButton" onClick={this.isSave}>Cохранить</button>
                                &nbsp;
                                <button className="cancelButton" onClick={this.isСancel}>Отмена</button>
                            </td>}
                    </tr>

                </tbody>

            </table>)
    };
};

export default Card;