import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.users
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const getUsersRows = () => {
      if (!this.props.users) {
        return null;
      }
      return this.props.users.map((user, index)=>{
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
        <Link to="/about">About</Link>
        <h1>Welcome to SSR Workshop</h1>
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

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
function fetchData(store) {
  return store.dispatch(fetchUsers());
}
export default {
  component: connect(mapStateToProps, {fetchUsers})(Home),
  fetchData
}

