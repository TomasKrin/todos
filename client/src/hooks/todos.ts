import { MutationCache, useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../api/api";

import { Todo } from "../types/todo";

const TODOS = "TODOS";

// export const useTodos = () => {
//   return useQuery<Todo[]>([TODOS, MutationCache], fetchTodos);
// };

export const useTodos = () => {
  return useQuery<Todo[]>([TODOS, Error], fetchTodos, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};

export const useAddTodo = () => {
  return useMutation(addTodo);
};
