import React from 'react';
import Button from '@material-ui/core/Button';

import Title from '../../components/title/title';
import Modal from '../../components/modal/modal';

import { register, getUsers } from '../../db';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: true,
      username: '',
      password: '',
      endpointInProgress: false,
      errorMessage: ''
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleRegister(event) {
    event.preventDefault();
    this.setState({ endpointInProgress: true });
    
    const { username, password } = this.state;

    getUsers()
      .then(users => {
        this.setState({ endpointInProgress: false, errorMessage: '' });
        console.log(users)
      })
      .catch(({ message }) => {
        this.setState({ endpointInProgress: false, errorMessage: message });
      });

    register({
      username,
      password,
    });

  }

  handleInputChange(event, attr) {
    this.setState({ [attr]: event.target.value, errorMessage: '' });
  }

  render() {
    return (
      <React.Fragment>
        <Title text="Hopets" />
        {this.state.showModal && (
          <Modal onClick={this.toggleModal}>
            <form onSubmit={this.handleRegister}>
              <div>
                <label htmlFor="user">Username</label>
                <input
                  id="user"
                  onChange={(event) => this.handleInputChange(event, 'username')}
                  value={this.state.username}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  onChange={(event) => this.handleInputChange(event, 'password')}
                  value={this.state.password}
                />
              </div>
              {this.state.errorMessage && (
                <div style={{ padding: '0.4em', backgroundColor: 'red', color: 'white' }}>
                  {this.state.errorMessage}
                </div>
              )}
              < Button variant="contained" color="secondary" type="submit" disabled={this.state.endpointInProgress}>Register</Button>
            </form>
          </Modal>
        )}
        <div>
          <Button variant="contained" color="primary">Login</Button>
          <Button variant="contained" color="primary" onClick={this.toggleModal}>Register</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
