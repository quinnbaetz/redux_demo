import React, {Component} from 'react';
import Utils from '../utils'
export default class LocationText extends Component {
  render() {
    return (
      <span
        style={{
          backgroundColor: Utils.getRandomColor(),
          padding: 10
        }}>
        <span>
          Address:
        </span>
        <span>
          State:
        </span>
      </span>
    )
  }
}
