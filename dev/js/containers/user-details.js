import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  render() {
    if (!this.props.user) {
      return <p>select user</p>
    } else {
      return (
        <div>
          <img src={ this.props.user.thumbnail } />
          <h3>{ this.props.user.first } { this.props.user.last}, { this.props.user.age }</h3>
          <p>{ this.props.user.description }</p>
        </div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetails);