import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import MobileAddNewClient from './MobileAddNewClient.js';
import MobileEditClient from './MobileEditClient.js';
import { clientsEvents } from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    mode: null, 
    selectedClient: null,
    allclients: this.props.clients
  };

  componentWillMount = () => {
    clientsEvents.addListener('saveChangesNewClient', this.saveChangesNewClient);
    clientsEvents.addListener('saveChangesEditClient', this.saveChangesEditClient);
    clientsEvents.addListener('cancelChanges', this.cancelChanges);
    clientsEvents.addListener('openMobileEditClient', this.openMobileEditClient);
    clientsEvents.addListener('deleteClient', this.deleteClient);
   };


  newClientForm = (newClient) => {
    if (newClient) {
      this.setState({ mode: 1 })
    }
  };

  openMobileEditClient = (clientInfo) => {
    this.setState({ mode: 2, selectedClient: clientInfo });
  };

  deleteClient = (isDeleteClient) => {
    let clients = [...this.state.clients];
    let indexDeletedClient = clients.indexOf(isDeleteClient);
    clients.splice(indexDeletedClient, 1);
    this.setState({ clients: clients, allclients: clients });

  };

  activeClients = () => {
    if (!this.state.allclients)
      this.state.allclients = [...this.state.clients];
    let filterClients = this.state.allclients.filter(client => {
      return client.balance >= 0
    }
    );
    this.setState({ clients: filterClients })
  };

  inactivClients = () => {
    if (!this.state.allclients)
      this.state.allclients = [...this.state.clients];
    let filterClients = this.state.allclients.filter(client => {
      return client.balance < 0
    }
    );
    this.setState({ clients: filterClients })
  };

  saveChangesNewClient = (newName, newBalance, id) => {
    let newClientsA = [...this.state.allclients, { id: id, fio: newName, balance: newBalance }];
    if (!this.state.allclients)
      this.state.allclients = newClientsA;
    this.setState({ clients: newClientsA, mode: null, allclients: newClientsA })
  };

  saveChangesEditClient = (client, newName, newBalance) => {
    let newClientsA = [...this.state.clients];
    let indexChangedClient = newClientsA.indexOf(client);
    let changedClient = { id: newClientsA[indexChangedClient].id, fio: newName, balance: newBalance };
    newClientsA.splice(indexChangedClient, 1, changedClient);
    this.setState({ clients: newClientsA, mode: null, allclients: newClientsA })
  };

  cancelChanges = () => {
    this.setState({ mode: null })
  };
  setName1 = () => {
    this.setState({ name: 'МТС' });
  };

  setName2 = () => {
    this.setState({ name: 'Velcom' });
};

  showAllClients = () => {
    this.setState({ clients: this.state.allclients });

  };

  addClient = () =>{
    this.newClientForm(true);
}

  render() {
    console.log("MobileCompany render");
    let clientsCode = this.state.clients.map(v =>
      <MobileClient key={v.id} info={v} />
    );
    return (<div>
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          <table className='MobileClient'>
            <tbody>
              {clientsCode}
            </tbody>
          </table>
          <button onClick={this.activeClients}>Активные клиенты</button>
          <br/>
          <button onClick={this.inactivClients}>Заблокированные клиенты</button>
          <br/>
          <button onClick={this.showAllClients}>Все клиенты</button>
          <br/>
          <button onClick={this.addClient}>Добавить клиента</button>
          {(this.state.mode == 1) &&
            <MobileAddNewClient />
          }
          {(this.state.mode == 2) &&
            <MobileEditClient client={this.state.selectedClient} />
          }
        </div>
      </div>
    </div>
    );
  }
}

export default MobileCompany;
