import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index.js';

class UserList extends Component {

  createList() {
    return this.props.users.map(e => {
      return (
        <li
          key={ e.id }
          onClick={ () => this.props.selectUser(e) }
        >
          { e.first } { e.last }
        </li>
      )
    })
  }

  render() {
    return (
      <ul>
        { this.createList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch) //prop select user is equal to function selectUser
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList); // exporting component with connection to store; so it's container; it co uld be in a different file

//export default UserList; - exporting default dumb component