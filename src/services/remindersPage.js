import axios from "axios";
import BASE_URL from "./backendUrlConnect";

export const fetchLists = async lists => {
  let obj = {
    shoppingList: { shoppingList: [], shoppingListId: null },
    todoList: { todoList: [], todoListId: null }
  };

  if (!lists.length) return obj;

  for (let list of lists) {
    let listData = await getList(list);

    try {
      if (list.list_type === "Shopping List") {
        obj["shoppingList"] = listData;
      } else {
        obj["todoList"] = listData;
      }
    } catch (err) {
      console.log(err);
    }
  }
  return obj;
};

const getList = list => {
  const { list_type, todolist_id } = list;
  const key = list_type === "To Do List" ? "todoList" : "shoppingList";

  return axios({
    method: "get",
    url: BASE_URL + "/todolist/" + todolist_id + "/all"
  })
    .then(({ data: listData }) => {
      return { [key + "Id"]: todolist_id, [key]: listData };
    })
    .catch(err => {
      return err;
    });
};

export const createList = (lists, selectedList, trip_id) => {
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].list_type === selectedList) {
      return false;
    }
  }
  return axios({
    method: "post",
    url: BASE_URL + "/todolist/",
    data: {
      name: "",
      trip_id,
      list_type: selectedList
    }
  })
    .then(({ data: { id } }) => {
      return { trip_id, todolist_id: id, name: "", list_type: selectedList };
    })
    .catch(err => {
      console.log(err);
    });
};

export const addTodo = (todoInput, state) => {
  const { todoListId, todoList } = state;
  let data = {
    task_name: todoInput,
    complete: false,
    todolist_id: todoListId
  };

  return axios({
    method: "post",
    url: BASE_URL + "/todolist/todo/",
    data
  })
    .then(({ data: { id } }) => {
      let newTodoList = [...todoList];
      data.id = id;
      newTodoList.push(data);
      return { todoList: newTodoList };
    })
    .catch(err => {
      console.log(err);
      if (err) return null;
    });
};

export const completeTodo = (index, todo_id, state) => {
  const { todoList } = state;

  let copiedTodoList = [...todoList];
  return axios
    .put(BASE_URL + "/todolist/todo/" + todo_id, {
      id: todo_id,
      complete: true
    })
    .then(() => {
      copiedTodoList[index].complete = true;
      return { todoList: copiedTodoList };
    })
    .catch(err => {
      console.log(err);
      return null;
    });
};

export const deleteTodo = (index, todo_id, state) => {
  const { todoList } = state;

  let copiedTodoList = [...todoList];
  copiedTodoList = copiedTodoList
    .slice(0, index)
    .concat(copiedTodoList.slice(index + 1));

  return axios
    .delete(BASE_URL + "/todolist/todo/" + todo_id)
    .then(() => {
      return { todoList: copiedTodoList };
    })
    .catch(err => {
      console.log(err);
      return null;
    });
};
