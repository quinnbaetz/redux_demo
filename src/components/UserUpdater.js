import React, {Component} from 'react';

let userId = 0


const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
    removeUser: id => dispatch(removeUser(id))
    updateUser: (user, changes) => dispatch(updateUser(user, changes))
    loadedEvent: () => dispatch(loaded())
    randomEvent: () => dispatch(random())
  };
};


class UserUpdater extends Component {
  constructor(props) {
    super(props)
  }



  loadUsers = () => {
    for(let i = 0; i<10; i++){
      this.addUser()
    }
  }
  addUser() {
    this.props.addUser({
      id: userId++,
      name: `User ${userId}`,
      email: `email${userId}@gmail.com`,
      location: {
        address: `Test Address ${userId}`,
        state: "MO"
      }
    });

  }
  removeUser() {
    this.props.removeUser(userId-1);
    userId--;
  }
  updateRandomUserName() {
    const updateUserId = Math.floor(Math.random()*(userId-1))
    const obj = {
      id: updateUserId,
      name:  "test1 "+Math.random()
    }

    this.props.updateUser(obj, ['name']);
  }
  updateRandomUserNameWithoutChange() {
    const updateUserId = Math.floor(Math.random()*(userId-1))
    const obj = {
      id: updateUserId,
      name: "test1"+Math.random() //How do I get a random user?
    }

    this.props.updateUser(obj);
  }

  updateRandomUserAddress() {
    const updateUserId = Math.floor(Math.random()*(userId-1))
    const obj = {
      id: updateUserId,
      location: {
        address: "test address"+Math.random()
      }
    }

    this.props.updateUser(obj, [location.address]);
  }
  updateRandomUserAddressWithoutChange() {
    const updateUserId = Math.floor(Math.random()*(userId-1))
    const obj = {
      id: updateUserId,
      location: {
        address: "test address"+Math.random()
      }
    }

    this.props.updateUser(obj);
  }

  triggerEvent(e) {

    //UserStore.triggerEvent(e.target.name)
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.loadUsers}>Load Users</button>
          <button onClick={this.removeUser}>Remove User</button>
          <button onClick={this.addUser}>Add User</button>
        </div>
        <div>
          <button onClick={this.updateRandomUserName}>Update Random Users Name With Change</button>
          <button onClick={this.updateRandomUserNameWithoutChange}>Update Random Users Name Without Change</button>
          <button onClick={this.updateWatchedObjectName}>Update Random Watched Objects Name</button>
        </div>
        <div>
          <button onClick={this.updateRandomUserAddress}>Update Random Users Address With Change</button>
          <button onClick={this.updateRandomUserAddressWithoutChange}>Update Random Users Address Without Change</button>
          <button onClick={this.updateWatchedObjectAddress}>Update Random Watched Objects Address</button>
        </div>
        <div>
          <button onClick={this.props.loadedEvent}>Trigger Custom Loaded Event</button>
          <button onClick={this.props.randomEvent}>Trigger Custom Randomize Event</button>

        </div>
       </div>
    )

  }
}

export default connect(null, mapDispatchToProps)(UserUpdater);

