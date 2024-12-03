import axios from "axios";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./ActionType";

export const get = () => async (dispatch) => {
  let res = await axios.get("https://fakestoreapi.com/products");

  dispatch(addTodo(res.data));
};

const post = (data) => async (dispatch) => {
  // api;
  dispatch();
};
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
