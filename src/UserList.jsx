import React, { Component } from 'react'

export default class UserList extends Component {
  render() {
    console.log(this.props);

    const {name, email} = this.props;
    return (
      <>
        <h1>User List</h1>

        {/* <p>{this.props.name}</p>
        <p>{this.props.email}</p> */}

        <p>{name}</p>
        <p>{email}</p>
      </>
    )
  }
}
