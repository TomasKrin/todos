import { ErrorMessage, Field } from "formik";

import Input from "./Input";
import { InputHTMLAttributes } from "react";

type Props = {
  name: string;
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
};

const FormikInput = ({ name, ...restProps }: Props) => {
  return (
    <div>
      <Field name={name} as={Input} {...restProps} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikInput;
