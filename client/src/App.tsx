import * as Yup from "yup";

import { Form, Formik } from "formik";
import { useAddTodo, useTodos } from "./hooks/todos";

import FormikInput from "./components/FormikInput";
import { NewTodo } from "./types/todo";
import { useQueryClient } from "@tanstack/react-query";

const initialValues = {
  title: "",
};

const validationSchema: Yup.ObjectSchema<NewTodo> = Yup.object().shape({
  title: Yup.string().required("Please fill the input field"),
});

const App = () => {
  const { data } = useTodos();
  const todos = data || [];

  const { mutateAsync: addTodo } = useAddTodo();
  const queryClient = useQueryClient();

  const handleAddTodo = async (values: NewTodo) => {
    await addTodo(values);
    queryClient.invalidateQueries(["TODOS"]);
  };

  return (
    <div>
      <div style={{ width: `50%` }}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleAddTodo}
          validationSchema={validationSchema}
        >
          <Form>
            <FormikInput name="title" placeholder="todo" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
