import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST,
} from "./actionTypes";
// import axios from "axios";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index,
});
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data,
});
// // redux-thunk can allow us send function through.
// // when return an arrow function, () can receive the store.dispatch
// // in the return function, we are suppose to change the store data
// // another round to use redux to create action and dispatch to store
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get("/api/todoList").then((res) => {
//       const data = res.data;
//       const action = initListAction(data);
//       dispatch(action);
//     });
//   };
// };

export const getInitList = () => ({
  type: GET_INIT_LIST,
});
