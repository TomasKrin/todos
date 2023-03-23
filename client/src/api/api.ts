import { NewTodo, Todo } from "../types/todo";

import axios from "axios";

const URL = "http://localhost:8080/";

export const fetchTodos = (): Promise<Todo[]> => {
  return axios.get(URL).then((response) => response.data);
};

export const addTodo = (Todo: NewTodo): Promise<NewTodo> => {
  return axios.post(URL, Todo).then((response) => response.data);
};
