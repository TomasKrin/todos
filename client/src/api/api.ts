import { Todo } from "../types/todo";
import axios from "axios";

export const fetchTodos = (): Promise<Todo[]> => {
  return axios.get("http://localhost:8080/").then((response) => response.data);
};
