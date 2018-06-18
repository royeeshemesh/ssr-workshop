import axios from 'axios';
import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);

    this.state = {};
  }

  async fetchData() {
    const users = await axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    });

    this.setState({
      users: users.data
    });
  }

  render() {
    const getUsersRows = () => {
      if (!this.state.users) {
        return null;
      }
      return this.state.users.map((user, index)=>{
        return (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        )
      })
    };

    return (
      <div>
        <h1>Welcome to SSR Workshop</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
        <table border="1">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {getUsersRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
