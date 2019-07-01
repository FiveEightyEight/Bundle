import React, { useState } from "react";
import NoLists from "./NoLists/NoLists";
import TodoListView from "./TodoListView/TodoListView";
import AddTodo from "./AddTodo/AddTodo";
import "./RemindersPage.css";

const RemindersPage = props => {
  const {
    lists,
    handleAddTodo,
    todoList,
    handleCompleteTodo,
    handleDeleteTodo,
    currentListDisplay,
    height
  } = props;

  const [todoInput, setTodoInput] = useState("");

  const handleTodoInputChange = e => {
    setTodoInput(e.target.value);
  };

  const addTodo = e => {
    if (todoInput.trim() === "") return;
    handleAddTodo(todoInput);
    setTodoInput("");
  };
  const containerHeight = Math.floor(height * 0.83);
  const listHeight = Math.floor(height * 0.75);
  return (
    <div className="bg-babyBlue " style={{ height: containerHeight + "px" }}>
      {lists.length === 0 ? (
        <>
          <NoLists />
        </>
      ) : currentListDisplay ? (
        <>
          <div
            className="reminderspage--todolist reminderspage--lists"
            style={{ height: listHeight }}
          >
            <TodoListView
              todoList={todoList}
              handleCompleteTodo={handleCompleteTodo}
              handleDeleteTodo={handleDeleteTodo}
              todoInput={todoInput}
              handleTodoInputChange={handleTodoInputChange}
              addTodo={addTodo}
              height={height}
            />
          </div>
          <div className="col-12 p-0 button-container">
            <div className="row justify-content-center">
              <AddTodo
                todoInput={todoInput}
                handleTodoInputChange={handleTodoInputChange}
                addTodo={addTodo}
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default RemindersPage;
