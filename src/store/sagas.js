import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from "axios";

// generator function
function* mySaga() {
  // everytime web receive the action called "GET_INIT_LIST", it will run the function called "getInitList"
  yield takeEvery(GET_INIT_LIST, getInitList);
}

function* getInitList() {
  try {
    // yield is like await
    const res = yield axios.get("/api/todoList");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

export default mySaga;
