import React from "react";
import { suggested_todos } from "../../../../services/todos";
import "./AddTodo.css";

const AddTodo = props => {
  const { todoInput, handleTodoInputChange, addTodo } = props;

  return (
    <div className="btn dropup">
      <button
        type="button"
        className="add-todo-button rounded-circle bg-denimBlue shadow"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-plus fa-2x" />
      </button>
      <div className="px-3 dropdown-menu dropdown-container border-denimBlue bg-babyBlue b-radius9">
        <div className="row">
          <div className="col-12">
            <label
              htmlFor="todo-input"
              className="mali700 c-denimBlue p-1 add-todo-label"
            >
              What's todo?
            </label>
          </div>
          <div className="col-12">
            <input
              id="todo-input"
              type="text"
              maxLength="50"
              value={todoInput}
              onChange={handleTodoInputChange}
              list="datalist2"
              className="p-1 add-todo-input"
            />
            <datalist id="datalist2" className="">
              <option defaultValue>Choose one...</option>
              {suggested_todos.map((e, i) => {
                return (
                  <option value={e} key={i} className="">
                    {e}
                  </option>
                );
              })}
            </datalist>
          </div>
          <div className="col-12">
            <div className="row p-2">
              <button
                className="add-button p-2 shadow bg-denimBlue c-white mali700 col-4 offset-7"
                type="submit"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
