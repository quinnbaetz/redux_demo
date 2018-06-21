import React, {Component} from 'react';
import Utils from '../utils'
import UserRowNormal from './UserRow'
export default class UserList extends Component {
  render() {
    return (
      <ul
        style={{
          backgroundColor: Utils.getRandomColor(),
          padding: 10
        }}
      >
      </ul>
    )


        // {UserStore.getList('All', this.getId()).map((id)=>{
        //  return (<UserRowNormal key={id} id={id}></UserRowNormal>)
        // })}

  }
}
