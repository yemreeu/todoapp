import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations"
import { useTodo } from "../../../contexts/TodoContext";


function NewTodoForm() {
  const { addTodo } = useTodo();

  return (
    <div>
      <Formik
        initialValues={{
          text:"",
        }}
        onSubmit={async (values, bag) => {
          await new Promise((r) => setTimeout(r, 100));

          addTodo(values.text);
          bag.resetForm();
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            id="text"
            name="text"
          />
        </Form>
      </Formik>
    </div>
  );
}

export default NewTodoForm;
