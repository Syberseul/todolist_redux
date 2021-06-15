import React from "react";
import { Input, Button, List } from "antd";
import store from "./store/index";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from "./store/actionCreators";
import "antd/dist/antd.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);

    // check if any data changes, if it is, then execute this.handleStoreChange function
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input
          value={this.state.inputValue}
          placeholder="todo information"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={this.handleInputChange}
        ></Input>
        <Button type="primary" onClick={this.handleBtnClick}>
          Submit
        </Button>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handltemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    // send action to Store, then Store will send this action and previous States to reducer.js
    store.dispatch(action);
  }

  // update data from Store
  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handltemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
