import React from 'react';
import PropTypes from 'prop-types';
import { clientsEvents } from "./events";

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    this.setState({ info: newProps.info });
  };

  editClients = (EO) => {
    clientsEvents.emit('openMobileEditClient', this.props.info)
  }

  deleteClient = (EO) => {
    clientsEvents.emit('deleteClient', this.props.info)
  };

  render() {
    console.log("MobileClient id=" + this.state.info.id + " render");
    return (
      <tr>
        <td className='MobileClientBalance'>{this.state.info.fio}</td>
        <td><button onClick={this.editClients}>Редактировать</button></td>
        <td><button onClick={this.deleteClient}>Удалить</button></td>
        <td className='MobileClientFIO'>{this.state.info.balance}</td>
      </tr>
    );
  }
}

export default MobileClient;
