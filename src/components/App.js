import React, {Component} from 'react';
import UserList from './UserList'
import TriggerWatcher from './TriggerWatcher'
import UserUpdater from './UserUpdater'
import CSS from './App.css'
import List from "./List";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sample Recoil App</h1>
        </header>
        <UserUpdater />
        <UserList />
        <TriggerWatcher />
          <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}



export default App;
