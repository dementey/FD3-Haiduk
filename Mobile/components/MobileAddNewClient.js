import React from 'react';

import { clientsEvents } from './events'
import './MobileAddNewClient.css'

class MobileAddNewClient extends React.PureComponent {

    state = {
        familyName: null, name: null, fatherName: null, balance: null
    };
    componentWillReceiveProps = (newProps) => {
        console.log('Mobile componentWillReceiveProps')
    };
    addName = (EO) => {
        this.state.familyName = EO.target.value
    };
    addBalance = (EO) => {
        this.state.balance = Number(EO.target.value);
    };
    saveChanges = (EO) => {
        let id = Math.floor(Math.random() * (1000)) + 1000;
        clientsEvents.emit('saveChangesNewClient', this.state.familyName, this.state.balance, id);
    };
    cancelChanges = (EO) => {
        clientsEvents.emit('cancelChanges', null)
    };
    render() {
        console.log("Mobile render");
        return <table>
            <tbody>
                <tr>
                    <td>
                        <label> ФИО</label>
                    </td>
                    <td>
                        <input type='text' name='fio' onChange={this.addName} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Баланс

                            </label>
                    </td>
                    <td><input type='text' name='balance' onChange={this.addBalance} /></td>
                </tr>
                <tr>
                    <td><button onClick={this.saveChanges}>Сохранить</button></td>
                    <td><button onClick={this.cancelChanges}>Отмена</button></td>
                </tr>
            </tbody>
        </table>
    }
}

export default MobileAddNewClient