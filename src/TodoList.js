import React from "react";
import store from "./store/index";
import TodoListUI from "./TodoListUI";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  // getTodoList,
  getInitList,
} from "./store/actionCreators";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handltemDelete = this.handltemDelete.bind(this);

    // check if any data changes, if it is, then execute this.handleStoreChange function
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handltemDelete={this.handltemDelete}
        list={this.state.list}
      />
    );
  }

  componentDidMount() {
    // //Redux-thunk will allow a function to dispatch
    // const action = getTodoList();
    // store.dispatch(action);
    const action = getInitList();
    store.dispatch(action);
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
