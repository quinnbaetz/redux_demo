import React, {Component} from 'react';
import Utils from '../utils'
import LocationTextNormal from './LocationText'
export default class UserList extends Component {
  render() {
    return (
      <li
        style={{
          backgroundColor: Utils.getRandomColor(),
          padding: 10
        }}
      >
        <span>
          Name:
        </span>
        <span>
          Email:
        </span>
        <LocationTextNormal id={this.props.id}></LocationTextNormal>
      </li>
    )

  }
}
