import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const TodoListUI = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      <Input
        value={props.inputValue}
        placeholder="todo information"
        style={{ width: "300px", marginRight: "10px" }}
        onChange={props.handleInputChange}
      ></Input>
      <Button type="primary" onClick={props.handleBtnClick}>
        Submit
      </Button>
      <List
        style={{ marginTop: "10px", width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handltemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
