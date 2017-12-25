import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class UserList extends Component {

  createList() {
    return (
      this.props.users.map(e => <li key={ e.id }>{ e.first } { e.last }</li>)
    )
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

export default connect(mapStateToProps)(UserList); // exporting component with connection to store; so it's container; it co uld be in a different file

//export default UserList; - exporting default dumb component