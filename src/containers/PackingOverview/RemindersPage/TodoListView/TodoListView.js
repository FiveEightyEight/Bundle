import React from "react";
import Todo from "../Todo/Todo";
import "./TodoListView.css";

const TodoListView = ({
  todoList,
  handleCompleteTodo,
  handleDeleteTodo,
  todoInput,
  handleTodoInputChange,
  addTodo,
  height
}) => {
  const height75 = Math.floor(height * 0.75);
  let incompleteCount = 0;
  const incompleteTodos = todoList.map((e, i, a) => {
    let t = a[a.length - 1 - i];
    if (t.complete === false) {
      incompleteCount += 1;
      return (
        <div className="todo" key={i}>
          <Todo
            task_name={t.task_name}
            index={a.length - 1 - i}
            value={t.id}
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
            complete={t.complete}
          />
        </div>
      );
    }
    return null;
  });

  let completedCount = 0;
  const completedTodos = todoList.map((e, i, a) => {
    let t = a[a.length - 1 - i];
    if (t.complete === true) {
      completedCount += 1;
      return (
        <div className="todo b-radius9" key={i}>
          <Todo
            task_name={t.task_name}
            index={a.length - 1 - i}
            value={t.id}
            handleDeleteTodo={handleDeleteTodo}
            complete={t.complete}
          />
        </div>
      );
    }
    return null;
  });

  return (
    <>
      <div
        className="container mt-5 bg-babyBlue"
        style={{
          height: height + "px",
          maxHeight: height + "px",
          marginBottom: "5rem"
        }}
      >
        <div className="todo-list-view row no-gutters">
          <div className="col-12 mb-2 bg-bundleBlue b-radius9 completed-container">
            <div className="b-radius9">
              <button
                className="col-12 b-radius9 incomplete-header-button"
                data-toggle="collapse"
                data-target="#todoList3"
                type="button"
                aria-expanded="false"
                aria-controls="todoList3"
                style={{ textDecoration: "none" }}
              >
                <div className="row justify-content-between bg-bundleBlue b-radius9 incomplete-header">
                  <span className="p-3 mali700">To Be Completed</span>
                  <span className="p-3 mali400">
                    {incompleteCount} items left
                  </span>
                </div>
              </button>
            </div>

            <div className="col-12">
              <div
                className="row no-gutters justify-content-center collapse show "
                id="todoList3"
              >
                <div className="col-12">{incompleteTodos}</div>
              </div>
            </div>
          </div>

          <div className="col-12 bg-smokeGrey b-radius9 complete-header ml-2">
            <button
              className="col-12 bg-smokeGrey c-white b-radius9 complete-header"
              type="button"
              data-toggle="collapse"
              data-target="#todoList2"
              aria-expanded="false"
              aria-controls="todoList2"
            >
              <div className="row justify-content-between b-radius9 complete-header">
                <span className="mali700 p-3">Completed</span>
                <span className="mali400 p-3">{completedCount} items</span>
              </div>
            </button>

            <div className="col">
              <div className="collapse " id="todoList2">
                <div className="">{completedTodos}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListView;
