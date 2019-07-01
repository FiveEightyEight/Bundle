import React, { Component } from "react";
import axios from "axios";
import BASEURL from "../../services/backendUrlConnect";
import PackingPage from "./PackingPage/PackingPage";
import "./PackingOverview.css";
import RemindersPage from "./RemindersPage/RemindersPage";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import BagSelector from "../../components/BagSelectorCard/BagSelectorCard";
import Tabs from "../../components/PackingTabs/PackingTabs";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ListCard from "./RemindersPage/ListCard/ListCard";
import AddListButton from "./RemindersPage/AddListCard/AddListCard";
import {
  addToDelete,
  addToShoppingCart,
  closeLastQuantity,
  createItem,
  executeDelete,
  findOrCreateShoppingCart,
  inputChange,
  markImportant,
  mountPacking,
  newQuantity,
  quantity,
  select,
  unpack,
  getTripImg,
  packAll
} from "../../services/packingPage";
import {
  fetchLists,
  addTodo,
  completeTodo,
  deleteTodo,
  createList
} from "../../services/remindersPage";

export default (class PackingOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripInfo: null,
      categories: null,
      page: "packing",
      bagTypes: { 1: "Personal", 2: "Carry-On", 3: "Checked" },
      bagName: "Personal",
      destinationImage: null,
      remindersImage:
        "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2232&q=80",
      currentBag: null,
      currentCategory: null,
      bags: null,
      alertDisplay: false,
      currentListDisplay: true,
      lists: null,
      list_id: null,
      todoList: [],
      shoppingList: [],
      todoListId: null,
      shoppingListId: null,
      completedTodos: 0,
      incompleteTodos: 0,
      loading: true,
      selectedList: null,
      lastInputIndex: null,
      toDelete: [],
      deleteMode: false,
      totalItems: 0,
      totalPacked: 0,
      itemInput: "",
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  async componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    const { trip_id } = this.props.match.params;
    const tripBagsAndLists = axios({
      method: "get",
      url: BASEURL + "/trip/init/" + trip_id
    });
    const allCategories = axios({
      method: "get",
      url: BASEURL + "/categories/all"
    });
    try {
      const [{ data: tripDetails }, { data: categories }] = await Promise.all([
        tripBagsAndLists,
        allCategories
      ]);
      const destinationImage = await getTripImg(
        tripDetails.trip.id,
        tripDetails.trip.name,
        tripDetails.trip.city
      );
      this.setState(
        {
          tripInfo: tripDetails.trip,
          categories,
          bags: tripDetails.bags,
          lists: tripDetails.lists,
          loading: false,
          destinationImage
        },
        async () => {
          const { bags, lists, bagTypes } = this.state;
          const { shoppingList, todoList } = await fetchLists(lists);
          const mountState = await mountPacking(bagTypes, bags, lists);
          if (mountState)
            this.setState({ ...mountState, ...shoppingList, ...todoList });
        }
      );
    } catch (err) {
      console.log("ERROR: ", err);
      this.setState({ loading: true });
    }
  }

  handleResize = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleSelectList = e => {
    this.setState({ selectedList: e.target.value });
  };

  updateLists = () => {
    const { trip_id } = this.props.match.params;

    axios({
      method: "get",
      url: BASEURL + "/trip/init/" + trip_id
    }).then(({ data: trip }) => {
      console.log("trip.list", trip.lists);
      this.setState({ lists: trip.lists });
    });
  };

  moveToTrip = () => {
    const { trip_id } = this.props.match.params;
    this.props.history.push("/trip/" + trip_id);
  };

  getItemCountAndKey = (type, trip_id, bag_id) => {
    const bagKey = `${type.slice(0, 2)}${trip_id}${bag_id}`;
    if (!this.state[bagKey]) return "loading";
    let packedCount = 0;
    for (let item of this.state[bagKey]) {
      if (item.packed) packedCount += 1;
    }
    const newCount = Math.floor(
      (packedCount / this.state[bagKey].length) * 100
    );
    return { count: newCount, key: bagKey };
  };

  handleOnClick = (name, index) => e => {
    e.preventDefault();
    e.stopPropagation();
    const { deleteMode } = this.state;
    if (deleteMode && (name === "packing" || name === "reminders")) return;
    if (name !== "endDelete" && deleteMode) {
      this.handleAddToDelete(name, index);
      return;
    }
    if (name !== "quantity") this.handleCloseLastQuantity();
    switch (name) {
      case "packing":
        this.setState({ page: name });
        break;
      case "reminders":
        this.setState({ page: name });
        break;
      case "bag":
        this.setState({ displayBag: index.key, bagName: index.bag_type });
        break;
      case "important":
        this.handleImportant(index, e);
        break;
      case "unpack":
        this.handleUnpack(index);
        break;
      case "select":
        this.handleSelect(index, e);
        break;
      case "quantity":
        this.handleQuantity(index, e);
        break;
      case "startDelete":
        this.setState({ deleteMode: true });
        break;
      case "endDelete":
        this.handleExecuteDelete();
        break;
      case "shopping-cart":
        this.handleShoppingCart(index, e);
        break;
      case "increaseQuantity":
        this.handleNewQuantity("increase", index);
        break;
      case "decreaseQuantity":
        this.handleNewQuantity("decrease", index);
        break;
      case "packALL":
        this.handlePackAll();
        break;
      default:
        return;
    }
  };

  /*
    REMINDERS PAGE FUNCTIONS:
  */

  handleAddTodo = async todoInput => {
    const newState = await addTodo(todoInput, this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleCompleteTodo = async (index, todo_id) => {
    const newState = await completeTodo(index, todo_id, this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleDeleteTodo = async (index, todo_id) => {
    const newState = await deleteTodo(index, todo_id, this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleCreateList = async () => {
    const { lists, selectedList, tripInfo } = this.state;
    const response = await createList(lists, selectedList, tripInfo.id);
    if (response) {
      const copiedLists = [...lists];
      copiedLists.push(response);
      response.list_type === "To Do List"
        ? this.setState({
            lists: copiedLists,
            todoListId: response.todolist_id
          })
        : this.setState({
            lists: copiedLists,
            shoppingListId: response.todolist_id
          });
    } else {
      this.setState({ alertDisplay: true });
    }
  };

  handleCurrentListDisplay = () => {
    const { currentListDisplay } = this.state;
    this.setState({ currentListDisplay: !currentListDisplay });
  };

  renderListCards = () => {
    const {
      alertDisplay,
      lists,
      todoList,
      currentListDisplay,
      height,
      width
    } = this.state;
    const { completedTodos, incompleteTodos } = this.getListItemsCount();
    const infoBarHeight = Math.floor(height * 0.17);
    let total = completedTodos
      ? Math.floor((completedTodos / todoList.length) * 100)
      : 0;
    return (
      <>
        <div className="col-2 offset-2 pt-2">
          <ProgressBar
            total={total}
            width={width}
            infoBarHeight={infoBarHeight}
          />
        </div>
        <div className="col-8 ">
          <div className="row justify-content-around no-gutters">
            {lists.length
              ? lists.map((e, i) => {
                  return (
                    <ListCard
                      key={i}
                      {...e}
                      currentListDisplay={currentListDisplay}
                      handleCurrentListDisplay={this.handleCurrentListDisplay}
                      completedTodos={completedTodos}
                      incompleteTodos={incompleteTodos}
                      infoBarHeight={infoBarHeight}
                      width={width}
                    />
                  );
                })
              : null}
            {lists.length < 2 ? (
              <div className="col-3">
                <AddListButton
                  createList={this.handleCreateList}
                  handleSelectList={this.handleSelectList}
                  alertDisplay={alertDisplay}
                  infoBarHeight={infoBarHeight}
                  width={width}
                />
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  };

  getListItemsCount = () => {
    const { todoList } = this.state;
    let completedTodos = 0;
    let incompleteTodos = 0;
    if (todoList.length > 0) {
      todoList.forEach(todoItem => {
        if (todoItem.complete === true) {
          completedTodos += 1;
        } else if (todoItem.complete === false) {
          incompleteTodos += 1;
        }
      });
    }
    return { completedTodos, incompleteTodos };
  };

  //  ------------------

  handlePackAll = () => {
    const newState = packAll(this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleAddToDelete = (name, index) => {
    this.handleCloseLastQuantity();
    if (name === "bag") return;
    const newState = addToDelete(name, index, this.state);
    this.setState(newState);
    return;
  };

  handleExecuteDelete = async () => {
    // if toDelete is empty, set deleteMode to false, and exit method
    if (this.state.toDelete.length === 0) {
      this.setState({ deleteMode: false });
      return;
    }
    const newState = await executeDelete(this.state);
    this.setState(newState);
  };

  handleUnpack = index => {
    const newState = unpack(index, this.state);
    this.setState(newState);
    return;
  };

  handleImportant = (index, e) => {
    const newState = markImportant(index, this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleSelect = (index, e) => {
    const newState = select(index, this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleShoppingCart = async (index, e) => {
    const list_id = await findOrCreateShoppingCart(
      index,
      this.state,
      this.props.lists
    );
    if (list_id === null) return;
    const result = await addToShoppingCart(index, this.state, list_id);
    const { newState, updateParent } = result;
    if (updateParent) {
      this.props.updateLists();
      if (newState) this.setState(newState);
    } else {
      if (newState) this.setState(newState);
    }
    return;
  };

  handleQuantity = (index, e, keyPress) => {
    this.handleCloseLastQuantity();
    const newState = quantity(index, e, keyPress, this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleNewQuantity = (method, index, e, keyPress) => {
    const newState = newQuantity(method, index, e, keyPress, this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleCloseLastQuantity = () => {
    const newState = closeLastQuantity(this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleInputChange = (name, index) => e => {
    const newState = inputChange(name, index, e, this.state);
    if (newState) this.setState(newState);
    return;
  };

  handleOnChange = e => {
    // temporary
    this.setState({ itemInput: e.target.value });
  };

  handleCreateItem = async () => {
    const newState = await createItem(this.state);
    if (newState) this.setState(newState);
    return;
  };

  onKeyPress = (name, index) => e => {
    if (name === "quantity") {
      if (e.key === "Enter") {
        this.handleQuantity(index, e, true);
      }
    }
  };

  render() {
    const {
      loading,
      page,
      bags,
      lists,
      tripInfo,
      selectedList,
      height,
      width,
      bagTypes,
      displayBag,
      deleteMode,
      totalItems,
      totalPacked,
      itemInput,
      bagName,
      todoList,
      todoListId,
      shoppingList,
      shoppingListId,
      alertDisplay,
      currentListDisplay,
      destinationImage,
      remindersImage
    } = this.state;
    const bagContents = displayBag ? this.state[displayBag] : [];
    const total = Math.floor((totalPacked / totalItems) * 100);
    const infoBarHeight = Math.floor(height * 0.2);
    return (
      <>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <div
              className="packingoverview--content-main shadow"
              style={{
                height: infoBarHeight + "px"
              }}
            >
              <img
                className="packing--img-cover"
                src={page === "packing" ? destinationImage : remindersImage}
                alt={`cover of ${tripInfo.city}`}
              />
              <Tabs
                page={page}
                handleOnClick={this.handleOnClick}
                moveToTrip={this.moveToTrip}
                windowHeight={height}
              />
              <div className="row mt-1 no-gutters">
                {page === "reminders" ? (
                  this.renderListCards()
                ) : (
                  <>
                    <div className="col-2 offset-2 pt-2">
                      <ProgressBar
                        total={total}
                        width={width}
                        infoBarHeight={infoBarHeight}
                      />
                    </div>
                    <div className="col-8 ">
                      <div className="row justify-content-around no-gutters">
                        {bags.map((e, i) => {
                          return (
                            <BagSelector
                              {...e}
                              bag_type={bagTypes[e.type_id]}
                              key={i}
                              countAndKey={this.getItemCountAndKey(
                                bagTypes[e.type_id],
                                e.trip_id,
                                e.bag_id
                              )}
                              displayBag={displayBag}
                              handleOnClick={this.handleOnClick}
                              width={width}
                              infoBarHeight={infoBarHeight}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {page === "packing" ? (
              <div className="packingoverview--main-background">
                <PackingPage
                  bags={bags}
                  lists={lists}
                  updateLists={this.updateLists}
                  windowHeight={height}
                  width={width}
                  bagContents={bagContents}
                  deleteMode={deleteMode}
                  itemInput={itemInput}
                  handleOnClick={this.handleOnClick}
                  handleChange={this.handleInputChange}
                  onKeyPress={this.onKeyPress}
                  handleOnChange={this.handleOnChange}
                  handleCreateItem={this.handleCreateItem}
                  height={height}
                  bagName={bagName}
                />
              </div>
            ) : (
              <RemindersPage
                lists={lists}
                updateLists={this.updateLists}
                trip_id={tripInfo.id}
                selectedList={selectedList}
                handleSelectList={this.handleSelectList}
                bag_id={bags[1].bag_id}
                windowHeight={height}
                todoList={todoList}
                todoListId={todoListId}
                shoppingList={shoppingList}
                shoppingListId={shoppingListId}
                handleAddTodo={this.handleAddTodo}
                handleCompleteTodo={this.handleCompleteTodo}
                handleDeleteTodo={this.handleDeleteTodo}
                createList={this.handleCreateList}
                alertDisplay={alertDisplay}
                currentListDisplay={currentListDisplay}
                handleCurrentListDisplay={this.handleCurrentListDisplay}
                height={height}
              />
            )}
          </>
        )}
      </>
    );
  }
});
