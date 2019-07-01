import React from "react";
import "./Todo.css";

const Todo = props => {
  const {
    task_name,
    index,
    value,
    handleCompleteTodo,
    handleDeleteTodo,
    complete
  } = props;

  const completed = <i className="far fa-check-circle fa-lg c-bundleBlue" />;
  const incomplete = (
    <i
      className="far fa-circle fa-lg c-bundleBlue"
      onClick={() => handleCompleteTodo(index, value)}
    />
  );

  return (
    <ul className="list-group">
      <li className="px-0 list-group-item d-flex">
        <div className="col-12 row justify-content-around no-gutters align-middle">
          <div className="col-1 text-center">
            <i
              className="far fa-trash-alt fa-lg c-bundleBlue"
              onClick={() => handleDeleteTodo(index, value)}
            />
          </div>
          <div className="bundleBlue-border-left-1 todo-divider py-0" />
          <div className="col-8 c-bundleBlue mali700">{task_name}</div>
          <div className="col-1 text-right">
            {complete === false ? incomplete : completed}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Todo;
